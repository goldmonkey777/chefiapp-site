# 📋 ARQUITETURA OFICIAL CHEFIAPP™
## ESPECIFICAÇÃO DEFINITIVA E OBRIGATÓRIA

***

## ✅ SUPABASE - TABELA DE MARKETING CRIADA

A tabela `marketing_leads_restaurants` foi **criada com sucesso** no Supabase do ChefIApp com:

- ✅ **Estrutura completa** (9 campos)
- ✅ **RLS ativo** (Row Level Security)
- ✅ **Política para anônimos**: INSERT permitido (formulário da landing)
- ✅ **Política para autenticados**: SELECT permitido (dashboard interno)

***

## 1️⃣ ESTRUTURA DO GITHUB

### Repositórios Obrigatórios

```
goldmonkey777/
├── chefiapp-app/          # App principal (React + Vite + Capacitor)
└── chefiapp-site/         # Landing page (React + Vite + TailwindCSS)
```

**REGRA ABSOLUTA**: Nunca misturar código entre repos.

***

## 2️⃣ DEPLOY DA LANDING PAGE

### Configuração Vercel

| Configuração | Valor |
|--------------|-------|
| **Repositório** | `goldmonkey777/chefiapp-site` |
| **Domínio** | `https://chefiapp.com` |
| **Branch** | `main` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

### Variáveis de Ambiente (Vercel)

```env
VITE_SUPABASE_URL=https://mcmxniuokmvzuzqfnpnn.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_i9m4mmIslboVPjiRwPEetA_UbdvKkng
```

***

## 3️⃣ SUPABASE - REGRAS OFICIAIS

### Projeto Único

**CRÍTICO**: ChefIApp usa **APENAS UM** projeto Supabase:
- Project ID: `mcmxniuokmvzuzqfnpnn`
- URL: `https://mcmxniuokmvzuzqfnpnn.supabase.co`

### Tabela de Marketing (✅ CRIADA)

```sql
-- Já criada com sucesso!
marketing_leads_restaurants (
  id uuid,
  restaurant_name text,
  business_type text,
  city_country text,
  employee_count text,
  contact text,
  main_pain_point text,
  source text DEFAULT 'landing-chefiapp.com',
  created_at timestamptz
)
```

**Políticas RLS Ativas**:
- ✅ `anon_insert_leads` - Anônimos podem inserir
- ✅ `authenticated_view_leads` - Autenticados podem visualizar

### Separação de Dados

| Tabela | Uso | Acesso |
|--------|-----|--------|
| `marketing_leads_restaurants` | Landing page leads | Anon (INSERT) |
| Demais 19 tabelas | App ChefIApp | Authenticated |

***

## 4️⃣ ESTRUTURA DA LANDING PAGE

### Seções Obrigatórias

```
/
├── Hero (CTA principal)
├── Como Funciona
├── Funcionalidades
├── Para Quem É
├── Early Access (formulário → Supabase)
├── Roadmap (MVP + futuro)
├── Founder
└── Footer
```

### Páginas Legais

```
/public/legal/
├── privacy.html
└── terms.html
```

### Footer Oficial

```
© 2025 ChefIApp™ by goldmonkey.studio
Operado por Goldmonkey Studio LLC (Wyoming, USA)
Base operacional em Ibiza, Espanha

Links: Privacy | Terms | Contact
```

***

## 5️⃣ ANIMAÇÕES E UI

### Stack Técnica

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| React | 19 | UI Framework |
| Vite | 6 | Build tool |
| TailwindCSS | 4 | Styling |
| Framer Motion | Latest | Animações |
| Supabase | 2.86 | Backend |

### Padrões de Animação

- ✅ Framer Motion para entrada suave
- ✅ Hover motion nos cards
- ✅ Scroll suave entre seções
- ✅ Layout mobile-first
- ✅ Design SaaS premium (estilo Silicon Valley)

***

## 6️⃣ OBJETIVO DA LANDING

### Público-Alvo

- 🍽️ Restaurantes
- 🍺 Bares
- 🏨 Hotéis
- 🎉 Buffets

### Funcionalidades

1. **Captar leads qualificados**
2. **Entregar credibilidade**
3. **Explicar MVP atual**
4. **Mostrar roadmap futuro**
5. **Permitir inscrição Early Access**
6. **Servir como página oficial** (Apple/Google Stores)

***

## 7️⃣ ASSINATURA OFICIAL

Toda automação, assistente, pipeline ou ferramenta **DEVE** respeitar:

```
From Ibiza with Love — by goldmonkey.studio
```

***

## 8️⃣ CÓDIGO EXEMPLO - FORMULÁRIO EARLY ACCESS

```typescript
// Landing page - EarlyAccessForm.tsx
import { supabase } from '@/lib/supabase'

const handleSubmit = async (data: FormData) => {
  const { error } = await supabase
    .from('marketing_leads_restaurants')
    .insert({
      restaurant_name: data.name,
      business_type: data.type,
      city_country: data.location,
      employee_count: data.employees,
      contact: data.email,
      main_pain_point: data.pain
    })

  if (error) console.error('Error:', error)
  else console.log('✅ Lead captured!')
}
```

***

## 9️⃣ CHECKLIST DE VALIDAÇÃO

Antes de deploy, verificar:

- [x] Repositórios separados (app + site)
- [x] Domínio chefiapp.com configurado
- [x] Variáveis de ambiente na Vercel
- [x] Tabela `marketing_leads_restaurants` criada ✅
- [x] RLS policies ativas ✅
- [x] Formulário conectado ao Supabase (corrigido em 2025-12-04)
- [x] Páginas legais criadas
- [x] Footer com créditos corretos
- [x] Design mobile-first
- [x] Animações Framer Motion

***

## 🔐 CONEXÃO SUPABASE (REFERÊNCIA)

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mcmxniuokmvzuzqfnpnn.supabase.co'
const supabaseAnonKey = 'sb_publishable_i9m4mmIslboVPjiRwPEetA_UbdvKkng'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

***

## 📊 STATUS ATUAL (2025-12-04)

| Item | Status |
|------|--------|
| Projeto Supabase | ✅ Ativo |
| Tabela Marketing | ✅ Criada |
| RLS Policies | ✅ Configuradas |
| Repo chefiapp-app | ✅ Existe |
| Repo chefiapp-site | ✅ Local (pronto para push) |
| Deploy Vercel | ✅ Ativo (projeto: chefiapp-web) |
| Domínio chefiapp.com | ⏳ A apontar |
| Form Bug Fix | ✅ Corrigido (table name) |

***

Esta especificação é **definitiva e obrigatória** para todos os sistemas, automações e assistentes que trabalhem com o ChefIApp™.

**From Ibiza with Love — by goldmonkey.studio** 🚀
