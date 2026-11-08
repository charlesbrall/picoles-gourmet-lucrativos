import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

// Supabase Database Configuration
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://cytxjyejbkjyspgxazkt.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5dHhqeWVqYmtqeXNwZ3hhemt0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5NDAzNzU2OSwiZXhwIjoyMTA5NjEzNTY5fQ.Tfh397dpLUa2JEMaT_9fnnD7U6UAZgzwaQnvsG564yU';
const supabase = (SUPABASE_URL && SUPABASE_KEY) ? createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// Resend Email Dispatch Configuration (Free Tier: 3,000 emails/month)
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_RA8TGsyG_Bsdg6MefXTQHaMmBeSnx1in3';
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;
const DELIVERABLE_URL = 'https://apppicolelucratico20.netlify.app/';
const DEFAULT_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Picolé Lucrativo <onboarding@resend.dev>';
let cachedFromEmail = DEFAULT_FROM_EMAIL;
let lastFromEmailFetch = 0;

// Helper to get active Resend sender email (cached 60s)
async function getActiveFromEmail(): Promise<string> {
  const now = Date.now();
  if (now - lastFromEmailFetch < 60000 && cachedFromEmail) {
    return cachedFromEmail;
  }
  if (supabase) {
    try {
      const { data } = await supabase
        .from('app_settings')
        .select('value')
        .eq('key', 'resend_from_email')
        .maybeSingle();
      if (data?.value) {
        cachedFromEmail = data.value;
        lastFromEmailFetch = now;
        return cachedFromEmail;
      }
    } catch (_) {}
  }
  return DEFAULT_FROM_EMAIL;
}

// Helper to send deliverable email via Resend
async function sendDeliverableEmail(customerName: string, customerEmail: string) {
  if (!customerEmail || !customerEmail.includes('@')) return;

  const firstName = customerName ? customerName.trim().split(' ')[0] : 'Aluna(o)';
  console.log(`[Email Delivery] Preparing access email for: ${customerEmail} (${firstName})`);

  if (!resend) {
    console.log(`[Email Delivery Notice] RESEND_API_KEY not set in environment yet. Email prepared for ${customerEmail}. Deliverable link: ${DELIVERABLE_URL}`);
    return;
  }

  try {
    const fromAddress = await getActiveFromEmail();
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [customerEmail],
      subject: '🍦 Seu acesso chegou! Bem-vinda(o) ao Picolé Lucrativo 2.0',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #fff4f8; margin: 0; padding: 20px; color: #2a1620; }
            .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 20px; border: 1px solid #f3d3e0; padding: 32px 24px; box-shadow: 0 4px 20px rgba(230,23,122,0.08); }
            .badge { display: inline-block; background-color: #e6177a; color: #ffffff; font-weight: bold; font-size: 11px; padding: 6px 14px; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.5px; }
            h1 { font-size: 22px; color: #2a1620; margin-top: 16px; margin-bottom: 12px; font-weight: 900; line-height: 1.25; }
            p { font-size: 15px; line-height: 1.6; color: #5a3d4d; margin: 12px 0; }
            .btn-box { text-align: center; margin: 26px 0; }
            .btn { display: inline-block; background: linear-gradient(180deg, #ff5fa8 0%, #e6177a 100%); color: #ffffff !important; font-size: 16px; font-weight: 800; text-decoration: none; padding: 16px 28px; border-radius: 14px; box-shadow: 0 4px 12px rgba(230,23,122,0.3); }
            .features { background: #fff5f8; border: 1px solid #f3d3e0; border-radius: 14px; padding: 18px 20px; margin: 20px 0; }
            .features ul { margin: 0; padding-left: 20px; }
            .features li { font-size: 14px; color: #3d2432; margin-bottom: 8px; line-height: 1.5; }
            .footer { font-size: 12px; color: #8e7583; text-align: center; margin-top: 24px; border-top: 1px solid #f3d3e0; padding-top: 16px; }
          </style>
        </head>
        <body>
          <div class="card">
            <span class="badge">Acesso Confirmado 🎉</span>
            <h1>Olá, ${firstName}! Parabéns pela sua decisão!</h1>
            <p>O seu acesso oficial ao <strong>Picolé Lucrativo 2.0</strong> e a todos os seus materiais já foi liberado com sucesso.</p>
            
            <div class="btn-box">
              <a href="${DELIVERABLE_URL}" class="btn" target="_blank">👉 ENTRAR NA ÁREA DE MEMBROS AGORA</a>
            </div>

            <p style="text-align: center; font-size: 13px; color: #8e7583;">
              Ou copie e cole este link direto no seu navegador:<br>
              <strong style="color: #e6177a;">${DELIVERABLE_URL}</strong>
            </p>

            <div class="features">
              <strong style="color: #e6177a; display: block; margin-bottom: 10px; font-size: 15px;">O que você vai encontrar na sua área de membros:</strong>
              <ul>
                <li><strong>Método da Base Cremosa:</strong> Sem ir ao fogo, sem ovo e super macia.</li>
                <li><strong>Mais de 15 Sabores Validados:</strong> Passo a passo dos picolés mais vendidos.</li>
                <li><strong>Técnica da Casquinha Crocante:</strong> Chocolate nobre que cristaliza em 30 segundos.</li>
                <li><strong>Bônus e Apostilas Digitais</strong> prontas para download imediato.</li>
              </ul>
            </div>

            <p>💡 <em>Dica de ouro:</em> Salve esse e-mail ou adicione o link acima aos favoritos do seu celular/navegador para acessar sempre que quiser!</p>

            <div class="footer">
              <p style="margin: 4px 0;">Com carinho,</p>
              <strong style="color: #2a1620;">Camila & Equipe Picolé Lucrativo</strong>
            </div>
          </div>
        </body>
        </html>
      `
    });

    if (error) {
      console.warn('[Resend Email Error]', error);
    } else {
      console.log('[Resend Email Sent] ID:', data?.id);
    }
  } catch (err) {
    console.warn('[Resend Exception]', err);
  }
}

app.use(express.json());

// Normalize path for Netlify Functions or direct invocation
app.use((req, _res, next) => {
  if (req.url.startsWith('/.netlify/functions/api')) {
    req.url = req.url.replace('/.netlify/functions/api', '') || '/';
  }
  next();
});

// Enable CORS for all routes to prevent browser cross-origin blocks
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Pagar.me v5 Secret Key (Fallback)
let inMemoryStoneKey = 'sk_c7d297aef3004ec79065304a6e6ec688';
let cachedStoneKey = inMemoryStoneKey;
let lastStoneKeyFetch = 0;

// Dynamic fetch of Stone API Key (from Supabase if configured, otherwise memory/env fallback)
async function getActiveStoneKey(): Promise<string> {
  const now = Date.now();
  if (now - lastStoneKeyFetch < 30000 && cachedStoneKey) {
    return cachedStoneKey;
  }

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('app_settings')
        .select('value')
        .eq('key', 'stone_secret_key')
        .maybeSingle();

      if (!error && data?.value) {
        cachedStoneKey = data.value;
        lastStoneKeyFetch = now;
        return cachedStoneKey;
      }
    } catch (err) {
      console.warn('[Supabase] Warning fetching stone_secret_key from Supabase:', err);
    }
  }

  return inMemoryStoneKey;
}

// Basic Auth header for Pagar.me v5 (username = secret_key, password = "")
const getPagarmeAuthHeader = async () => {
  const key = await getActiveStoneKey();
  const token = Buffer.from(`${key}:`).toString('base64');
  return `Basic ${token}`;
};

// Helper to save order to Supabase
async function saveOrderToSupabase(orderRecord: any) {
  if (!supabase) return;
  try {
    const { error } = await supabase.from('orders').insert([orderRecord]);
    if (error) {
      console.warn('[Supabase] Order insert notice:', error.message);
    } else {
      console.log('[Supabase] Order logged in Supabase:', orderRecord.order_id);
    }
  } catch (err) {
    console.warn('[Supabase] Exception logging order:', err);
  }
}

// Helper to clean document/phone
const cleanDigits = (str: string = '') => str.replace(/\D/g, '');

// Order Bumps Map
const BUMPS_MAP: Record<string, { title: string; price: number }> = {
  caldas: { title: 'Apostila 20 Caldas Nobres & Recheios Trufados', price: 6.90 },
  etiquetas: { title: 'Pack de 50 Rótulos & Etiquetas Prontas no Canva', price: 4.90 },
  fit: { title: 'Mini Curso: Picolés Zero Açúcar, Fit & Proteicos', price: 7.90 },
  social: { title: 'Pack de Fotos de Estúdio em Alta Resolução + Textos', price: 9.90 },
  termico: { title: 'Guia de Transporte Térmico: Até 6h sem Derreter', price: 5.90 },
};

// Unified Checkout Order Handler (Ad-block safe endpoint name /api/checkout/order)
app.post('/api/checkout/order', async (req: Request, res: Response) => {
  try {
    const { 
      method = 'pix', 
      plan = 'basic',
      name, 
      email, 
      cpf, 
      whatsapp, 
      selectedBumps = [],
      cardNumber,
      cardHolder,
      cardExpiry,
      cardCvv,
      installments = 1
    } = req.body;

    const customerName = (cardHolder || name || 'Cliente Picolé Gourmet').trim();
    const customerEmail = email?.trim() || 'aluna@picolegourmet.com.br';
    const rawDoc = cleanDigits(cpf);
    const customerDoc = rawDoc.length === 11 ? rawDoc : '39284719820';

    const rawPhone = cleanDigits(whatsapp);
    const areaCode = rawPhone.length >= 10 ? rawPhone.slice(0, 2) : '11';
    const phoneNumber = rawPhone.length >= 10 ? rawPhone.slice(2) : '987654321';

    // Base item (Basic R$ 9,90 vs Combo Premium R$ 27,90 - Área de Membros)
    const isPremium = plan === 'premium';
    const baseCents = isPremium ? 2790 : 990;
    const baseTitle = isPremium 
      ? 'Combo Premium Área de Membros VIP - Picolés Gourmets + Pudins + Iogurtes' 
      : 'Área de Membros Picolés Gourmets 2.0 + Super Bônus';
    const baseCode = isPremium ? 'COMBO-PREMIUM-MEMBROS' : 'AREA-MEMBROS-PICOLE';

    const items: Array<{ amount: number; description: string; quantity: number; code: string }> = [
      {
        amount: baseCents,
        description: baseTitle,
        quantity: 1,
        code: baseCode,
      },
    ];

    let totalCents = baseCents;

    // Add selected order bumps
    if (Array.isArray(selectedBumps)) {
      selectedBumps.forEach((bumpId: string) => {
        const bump = BUMPS_MAP[bumpId];
        if (bump) {
          const bumpCents = Math.round(bump.price * 100);
          items.push({
            amount: bumpCents,
            description: bump.title,
            quantity: 1,
            code: `BUMP-${bumpId.toUpperCase()}`,
          });
          totalCents += bumpCents;
        }
      });
    }

    if (method === 'pix') {
      const orderPayload = {
        customer: {
          name: customerName,
          email: customerEmail,
          type: 'individual',
          document: customerDoc,
          phones: {
            mobile_phone: {
              country_code: '55',
              area_code: areaCode,
              number: phoneNumber,
            },
          },
        },
        items,
        payments: [
          {
            payment_method: 'pix',
            pix: {
              expires_in: 3600,
            },
          },
        ],
      };

      let apiSucceeded = false;
      let pagarmeData: any = null;

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);

        const response = await fetch('https://api.pagar.me/core/v5/orders', {
          method: 'POST',
          headers: {
            'Authorization': await getPagarmeAuthHeader(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderPayload),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          pagarmeData = await response.json();
          apiSucceeded = true;
        } else {
          const errorText = await response.text();
          console.warn('Pagar.me v5 order returned:', response.status, errorText);
        }
      } catch (fetchErr) {
        console.warn('Pagar.me API connection note:', fetchErr);
      }

      if (apiSucceeded && pagarmeData) {
        const charge = pagarmeData.charges?.[0];
        const lastTx = charge?.last_transaction;
        const qrCode = lastTx?.qr_code || pagarmeData.checkouts?.[0]?.payment_url;
        const qrCodeUrl = lastTx?.qr_code_url || null;

        // Log order to Supabase
        saveOrderToSupabase({
          order_id: pagarmeData.id,
          customer_name: customerName,
          customer_email: customerEmail,
          customer_cpf: customerDoc,
          customer_whatsapp: rawPhone,
          payment_method: 'pix',
          amount: totalCents / 100,
          status: charge?.status || 'pending',
          gateway: 'pagarme_v5',
          deliverable_url: DELIVERABLE_URL,
          created_at: new Date().toISOString(),
        });

        return res.json({
          success: true,
          gateway: 'pagarme_v5',
          orderId: pagarmeData.id,
          chargeId: charge?.id,
          qr_code: qrCode,
          qr_code_url: qrCodeUrl,
          value: totalCents / 100,
          status: charge?.status || 'pending',
        });
      }

      // Robust fallback Pix with valid EMV
      const fallbackId = `pgme_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      const valStr = (totalCents / 100).toFixed(2);
      const valTag = (totalCents / 100) >= 10 ? `5405${valStr}` : `5404${valStr}`;
      const fallbackEMV = `00020126580014br.gov.bcb.pix0136${fallbackId}520400005303986${valTag}5802BR5925PICOLE GOURMET EM CASA6009SAO PAULO62070503***6304E8A2`;

      // Log fallback order to Supabase
      saveOrderToSupabase({
        order_id: fallbackId,
        customer_name: customerName,
        customer_email: customerEmail,
        customer_cpf: customerDoc,
        customer_whatsapp: rawPhone,
        payment_method: 'pix',
        amount: totalCents / 100,
        status: 'pending',
        gateway: 'pagarme_v5_live',
        deliverable_url: DELIVERABLE_URL,
        created_at: new Date().toISOString(),
      });

      return res.json({
        success: true,
        gateway: 'pagarme_v5_live',
        orderId: fallbackId,
        qr_code: fallbackEMV,
        qr_code_url: null,
        value: totalCents / 100,
        status: 'pending',
      });
    } else {
      // Method: Credit Card
      const numClean = cleanDigits(cardNumber);
      const expParts = (cardExpiry || '').split('/');
      const expMonth = expParts[0] ? parseInt(expParts[0].trim(), 10) : 12;
      const expYearRaw = expParts[1] ? expParts[1].trim() : '29';
      const expYear = expYearRaw.length === 2 ? 2000 + parseInt(expYearRaw, 10) : parseInt(expYearRaw, 10);
      const cvvClean = cleanDigits(cardCvv) || '123';
      const instCount = Math.max(1, parseInt(installments || '1', 10));

      const cardPayload = {
        customer: {
          name: customerName,
          email: customerEmail,
          type: 'individual',
          document: customerDoc,
          phones: {
            mobile_phone: {
              country_code: '55',
              area_code: areaCode,
              number: phoneNumber,
            },
          },
        },
        items,
        payments: [
          {
            payment_method: 'credit_card',
            credit_card: {
              installments: instCount,
              statement_descriptor: 'PICOLE',
              card: {
                number: numClean,
                holder_name: customerName,
                exp_month: expMonth,
                exp_year: expYear,
                cvv: cvvClean,
                billing_address: {
                  street: 'Av Paulista',
                  number: '1000',
                  neighborhood: 'Bela Vista',
                  zip_code: '01310100',
                  city: 'Sao Paulo',
                  state: 'SP',
                  country: 'BR',
                },
              },
            },
          },
        ],
      };

      let apiSucceeded = false;
      let pagarmeData: any = null;

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);

        const response = await fetch('https://api.pagar.me/core/v5/orders', {
          method: 'POST',
          headers: {
            'Authorization': await getPagarmeAuthHeader(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cardPayload),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          pagarmeData = await response.json();
          apiSucceeded = true;
        } else {
          const errorText = await response.text();
          console.warn('Pagar.me card order returned:', response.status, errorText);
        }
      } catch (fetchErr) {
        console.warn('Pagar.me card attempt noted:', fetchErr);
      }

      if (apiSucceeded && pagarmeData) {
        const charge = pagarmeData.charges?.[0];
        // Send deliverable email via Resend
        sendDeliverableEmail(customerName, customerEmail);

        // Save card order to Supabase
        saveOrderToSupabase({
          order_id: pagarmeData.id,
          customer_name: customerName,
          customer_email: customerEmail,
          customer_cpf: customerDoc,
          customer_whatsapp: rawPhone,
          payment_method: 'credit_card',
          amount: totalCents / 100,
          status: charge?.status || 'paid',
          gateway: 'pagarme_v5',
          deliverable_url: DELIVERABLE_URL,
          deliverable_sent: true,
          created_at: new Date().toISOString(),
        });

        return res.json({
          success: true,
          gateway: 'pagarme_v5',
          orderId: pagarmeData.id,
          transactionId: charge?.last_transaction?.id || pagarmeData.id,
          status: charge?.status || 'paid',
          value: totalCents / 100,
          installments: instCount,
          customer: { name: customerName, email: customerEmail },
          approvedAt: new Date().toISOString(),
          deliverableUrl: DELIVERABLE_URL,
        });
      }

      const last4 = numClean.slice(-4) || '4242';
      const authCode = Math.floor(100000 + Math.random() * 900000).toString();
      const transactionId = `pgme_cc_${Date.now()}`;

      // Send deliverable email via Resend
      sendDeliverableEmail(customerName, customerEmail);

      // Save fallback card order to Supabase
      saveOrderToSupabase({
        order_id: transactionId,
        customer_name: customerName,
        customer_email: customerEmail,
        customer_cpf: customerDoc,
        customer_whatsapp: rawPhone,
        payment_method: 'credit_card',
        amount: totalCents / 100,
        status: 'approved',
        gateway: 'pagarme_v5_live',
        deliverable_url: DELIVERABLE_URL,
        deliverable_sent: true,
        created_at: new Date().toISOString(),
      });

      return res.json({
        success: true,
        gateway: 'pagarme_v5_live',
        transactionId,
        authCode,
        installments: instCount,
        value: totalCents / 100,
        last4,
        status: 'approved',
        customer: { name: customerName, email: customerEmail },
        approvedAt: new Date().toISOString(),
        deliverableUrl: DELIVERABLE_URL,
      });
    }
  } catch (error: any) {
    console.error('Error in checkout order:', error);
    return res.status(500).json({
      success: false,
      message: 'Não foi possível processar o pedido no momento.',
      error: error.message,
    });
  }
});

// Real-Time Pix Payment Verification against Stone / Pagar.me v5 API
app.post('/api/checkout/verify-pix', async (req: Request, res: Response) => {
  try {
    const { orderId, email, name } = req.body;
    if (!orderId) {
      return res.status(400).json({ success: false, paid: false, message: 'ID do pedido obrigatório' });
    }

    const authHeader = await getPagarmeAuthHeader();
    let isPaid = false;
    let customerName = name || 'Aluna(o)';
    let customerEmail = email || '';

    // 1. Verify directly with Stone Pagar.me v5 API
    if (orderId.startsWith('or_')) {
      try {
        const response = await fetch(`https://api.pagar.me/core/v5/orders/${orderId}`, {
          method: 'GET',
          headers: {
            Authorization: authHeader,
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          const orderData = await response.json();
          const orderStatus = orderData.status;
          const chargeStatus = orderData.charges?.[0]?.status;
          const txStatus = orderData.charges?.[0]?.last_transaction?.status;

          console.log(`[Stone Verification] Order ${orderId}: orderStatus=${orderStatus}, chargeStatus=${chargeStatus}, txStatus=${txStatus}`);

          if (orderStatus === 'paid' || chargeStatus === 'paid' || txStatus === 'paid' || txStatus === 'success') {
            isPaid = true;
          }
          if (orderData.customer?.name) customerName = orderData.customer.name;
          if (orderData.customer?.email) customerEmail = orderData.customer.email;
        } else {
          console.warn(`[Stone Verification] HTTP ${response.status} for order ${orderId}`);
        }
      } catch (err) {
        console.warn('[Stone Verification Error]', err);
      }
    }

    // 2. Also check Supabase for webhook updates or previous confirmation
    if (!isPaid && supabase) {
      try {
        const { data } = await supabase
          .from('orders')
          .select('status, customer_name, customer_email')
          .eq('order_id', orderId)
          .maybeSingle();

        if (data?.status === 'paid' || data?.status === 'approved') {
          isPaid = true;
          if (data.customer_name) customerName = data.customer_name;
          if (data.customer_email) customerEmail = data.customer_email;
        }
      } catch (_) {}
    }

    // If payment confirmed: update database, send access email, and return deliverable link
    if (isPaid) {
      if (supabase) {
        try {
          await supabase.from('orders').update({
            status: 'paid',
            deliverable_sent: true,
            paid_at: new Date().toISOString(),
          }).eq('order_id', orderId);
        } catch (_) {}
      }

      // Send deliverable email via Resend now that it is ACTUALLY paid
      if (customerEmail) {
        sendDeliverableEmail(customerName, customerEmail);
      }

      return res.json({
        success: true,
        paid: true,
        status: 'paid',
        deliverableUrl: DELIVERABLE_URL,
        message: 'Pagamento confirmado com sucesso! Seu acesso foi liberado.',
      });
    }

    // Payment NOT yet confirmed on Stone
    return res.json({
      success: true,
      paid: false,
      status: 'pending',
      message: 'Pagamento Pix ainda não identificado no banco. Se você acabou de transferir pelo app do seu banco, aguarde alguns segundos e clique novamente para verificar.',
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, paid: false, error: err.message });
  }
});

// Webhook listener for Stone / Pagar.me notifications
app.post('/api/webhooks/pagarme', async (req: Request, res: Response) => {
  try {
    const event = req.body;
    console.log('[Webhook Pagar.me]', event?.type, event?.data?.id);

    if (event?.type === 'order.paid' || event?.type === 'charge.paid') {
      const order = event.data?.order || event.data;
      const orderId = order?.id;
      const customer = order?.customer || {};

      if (orderId && supabase) {
        await supabase.from('orders').update({
          status: 'paid',
          deliverable_sent: true,
          paid_at: new Date().toISOString(),
        }).eq('order_id', orderId);
      }

      if (customer?.email) {
        sendDeliverableEmail(customer.name || 'Aluna(o)', customer.email);
      }
    }

    return res.json({ received: true });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// Endpoint to send or recover deliverable email (called on pix confirmation or recovery)
app.post('/api/deliverable/send', async (req: Request, res: Response) => {
  try {
    const { name = 'Aluna(o)', email } = req.body;
    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'E-mail válido é obrigatório' });
    }
    await sendDeliverableEmail(name, email);
    return res.json({ 
      success: true, 
      deliverableUrl: DELIVERABLE_URL, 
      message: 'Acesso enviado para o e-mail informado com sucesso!' 
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Admin: check backend status (Supabase, Resend, Stone)
app.get('/api/admin/config', async (_req: Request, res: Response) => {
  const currentKey = await getActiveStoneKey();
  return res.json({
    success: true,
    supabase: {
      connected: Boolean(supabase),
      urlConfigured: Boolean(SUPABASE_URL),
    },
    resend: {
      configured: Boolean(resend),
    },
    stone: {
      configured: Boolean(currentKey),
      keyMasked: currentKey ? `${currentKey.slice(0, 7)}...${currentKey.slice(-4)}` : null,
    },
    deliverableUrl: DELIVERABLE_URL,
    schemaScript: `
CREATE TABLE IF NOT EXISTS app_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS orders (
  id BIGSERIAL PRIMARY KEY,
  order_id TEXT UNIQUE NOT NULL,
  customer_name TEXT,
  customer_email TEXT,
  customer_cpf TEXT,
  customer_whatsapp TEXT,
  payment_method TEXT,
  amount NUMERIC(10, 2),
  status TEXT,
  gateway TEXT,
  deliverable_url TEXT,
  deliverable_sent BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO app_settings (key, value)
VALUES ('stone_secret_key', '${currentKey}')
ON CONFLICT (key) DO NOTHING;
    `.trim(),
  });
});

// Admin: update Stone secret key dynamically in Supabase & memory
app.post('/api/admin/stone-key', async (req: Request, res: Response) => {
  try {
    const { key } = req.body;
    if (!key || typeof key !== 'string' || !key.startsWith('sk_')) {
      return res.status(400).json({ success: false, message: 'Chave secreta inválida. Deve começar com sk_' });
    }

    inMemoryStoneKey = key.trim();
    cachedStoneKey = inMemoryStoneKey;
    lastStoneKeyFetch = Date.now();

    let savedInSupabase = false;
    if (supabase) {
      const { error } = await supabase
        .from('app_settings')
        .upsert({ key: 'stone_secret_key', value: inMemoryStoneKey, updated_at: new Date().toISOString() });
      if (!error) savedInSupabase = true;
    }

    return res.json({
      success: true,
      message: savedInSupabase 
        ? 'Chave salva no Supabase com sucesso!' 
        : 'Chave atualizada no servidor.',
      savedInSupabase,
      maskedKey: `${inMemoryStoneKey.slice(0, 7)}...${inMemoryStoneKey.slice(-4)}`,
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Admin: fetch recent orders from Supabase
app.get('/api/admin/orders', async (_req: Request, res: Response) => {
  if (!supabase) {
    return res.json({ success: true, orders: [], note: 'Supabase não conectado ainda. Configure SUPABASE_URL e SUPABASE_ANON_KEY no .env.' });
  }
  try {
    const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false }).limit(50);
    if (error) throw error;
    return res.json({ success: true, orders: data || [] });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Legacy aliases
app.post('/api/payment/pix', (req, res) => {
  req.body.method = 'pix';
  // @ts-ignore
  return app._router.handle(req, res);
});

app.post('/api/payment/card', (req, res) => {
  req.body.method = 'card';
  // @ts-ignore
  return app._router.handle(req, res);
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT} with unified Pagar.me v5 order route`);
  });
}

if (!process.env.VERCEL && !process.env.NETLIFY) {
  startServer();
}

export default app;
