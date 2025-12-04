# 🚀 GUIA DE DEPLOY NA VERCEL — ChefIApp™

**Última atualização:** 2025-12-04
**Status:** ✅ Código pronto para deploy

---

## 📋 PRÉ-REQUISITOS

Antes de começar, certifique-se de ter:

- ✅ Conta na Vercel (https://vercel.com)
- ✅ Código no GitHub (https://github.com/goldmonkey777/chefiapp-site)
- ✅ Credenciais Supabase (URL + Anon Key)

---

## 🎯 MÉTODO 1: DEPLOY VIA VERCEL DASHBOARD (RECOMENDADO)

### Passo 1: Acessar Vercel

1. Acesse: https://vercel.com/login
2. Faça login com sua conta GitHub
3. Vá para o Dashboard: https://vercel.com/dashboard

### Passo 2: Importar Projeto

```
Dashboard → Add New → Project
```

**Ou acesse diretamente:**
```
https://vercel.com/new
```

### Passo 3: Conectar Repositório

1. Clique em **"Import Git Repository"**
2. Selecione sua conta GitHub: `goldmonkey777`
3. Procure o repositório: `chefiapp-site`
4. Clique em **"Import"**

### Passo 4: Configurar Projeto

#### Framework Preset
```
Framework Preset: Vite
✅ Detectado automaticamente
```

#### Build Settings
```
Build Command:     npm run build
Output Directory:  dist
Install Command:   npm install
```

**✅ Não altere nada aqui (já está correto)**

#### Root Directory
```
Root Directory: ./
```

**✅ Deixe em branco (usar raiz do repositório)**

### Passo 5: Adicionar Environment Variables

Clique em **"Environment Variables"** e adicione:

#### Variável 1: VITE_SUPABASE_URL
```
Name:  VITE_SUPABASE_URL
Value: https://mcmxniuokmvzuzqfnpnn.supabase.co
```

#### Variável 2: VITE_SUPABASE_ANON_KEY
```
Name:  VITE_SUPABASE_ANON_KEY
Value: sb_publishable_i9m4mmIslboVPjiRwPEetA_UbdvKkng
```

**⚠️ IMPORTANTE:**
- ✅ Selecione todos os ambientes: `Production`, `Preview`, `Development`
- ✅ Não adicione aspas nas variáveis
- ✅ Copie exatamente como está acima

### Passo 6: Deploy!

1. Clique em **"Deploy"**
2. Aguarde o build (2-3 minutos)
3. ✅ Deploy concluído!

### Passo 7: Verificar Deploy

Após o deploy, você verá:

```
🎉 Congratulations!
Your project has been deployed.

🔗 Visit: https://chefiapp-site-xxx.vercel.app
```

**Teste o site:**
1. Acesse a URL fornecida
2. Navegue pelas seções
3. Teste o formulário Early Access
4. Verifique se o logo aparece
5. Confirme que as animações funcionam

---

## 🎯 MÉTODO 2: DEPLOY VIA CLI (AVANÇADO)

### Passo 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Passo 2: Login

```bash
vercel login
```

### Passo 3: Deploy

```bash
cd "/Users/goldmonkey/Chefiapp Webpage"
vercel
```

### Passo 4: Seguir prompts

```
? Set up and deploy "~/Chefiapp Webpage"? [Y/n] y
? Which scope do you want to deploy to? goldmonkey777
? Link to existing project? [y/N] n
? What's your project's name? chefiapp-site
? In which directory is your code located? ./
? Want to override the settings? [y/N] n
```

### Passo 5: Deploy para produção

```bash
vercel --prod
```

---

## 🌐 CONFIGURAR DOMÍNIO CUSTOMIZADO

### Opção A: Domínio já na Vercel

1. Acesse: https://vercel.com/goldmonkey777/chefiapp-site/settings/domains
2. Clique em **"Add Domain"**
3. Digite: `chefiapp.com`
4. Clique em **"Add"**
5. Siga instruções de DNS (se necessário)

### Opção B: Domínio em outro registrar

1. Acesse seu registrar (ex: GoDaddy, Namecheap, etc.)
2. Vá para **"DNS Settings"**
3. Adicione um registro **A** ou **CNAME**:

**Para apex domain (chefiapp.com):**
```
Type:  A
Name:  @
Value: 76.76.21.21
TTL:   3600
```

**Para www (www.chefiapp.com):**
```
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
TTL:   3600
```

4. Aguarde propagação DNS (até 48h, geralmente 1-2h)

---

## 🔧 CONFIGURAÇÕES ADICIONAIS

### 1. Configurar Redirects (www → apex)

No arquivo `vercel.json` (já configurado):

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "www.chefiapp.com"
        }
      ],
      "destination": "https://chefiapp.com/:path*",
      "permanent": true
    }
  ]
}
```

### 2. Verificar Headers de Segurança

Já configurado em `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 3. Ativar Analytics

1. Acesse: https://vercel.com/goldmonkey777/chefiapp-site/analytics
2. Clique em **"Enable Analytics"**
3. ✅ Vercel Analytics já está no código (`src/main.tsx`)

---

## 🐛 TROUBLESHOOTING

### Problema: Build Falhou

**Erro:** `Command "npm run build" exited with 1`

**Solução:**
```bash
# Teste localmente primeiro
npm install
npm run build

# Se funcionar local, o problema é nas env vars
# Verifique se adicionou VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY
```

### Problema: Página em Branco

**Erro:** Site carrega mas está vazio

**Solução:**
1. Abra DevTools (F12)
2. Vá para Console
3. Procure erros JavaScript
4. Geralmente é problema de env vars

### Problema: Formulário Não Funciona

**Erro:** Form submit não salva no Supabase

**Solução:**
1. Verifique se as env vars estão corretas
2. Teste localmente com `.env.local`:
```env
VITE_SUPABASE_URL=https://mcmxniuokmvzuzqfnpnn.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_i9m4mmIslboVPjiRwPEetA_UbdvKkng
```
3. Execute: `npm run dev`
4. Teste o formulário

### Problema: DNS Não Propaga

**Erro:** Domínio não aponta para Vercel após 24h

**Solução:**
```bash
# Verifique DNS
dig chefiapp.com

# Ou use online
https://dnschecker.org/#A/chefiapp.com
```

---

## 📊 VERIFICAR DEPLOY

### Checklist Pós-Deploy:

- [ ] Site carrega sem erros
- [ ] Todas as 12 seções aparecem
- [ ] Hero section está visível
- [ ] Formulário Early Access funciona
- [ ] Link para sofigastrobar.com funciona
- [ ] Animações Framer Motion funcionam
- [ ] Mobile responsivo está correto
- [ ] Logo do ChefIApp aparece
- [ ] Footer com links legais funciona
- [ ] Analytics está ativo

### Teste o Formulário:

1. Acesse: https://your-site.vercel.app/#early-access
2. Preencha todos os campos
3. Clique em **"Quero ser um dos primeiros"**
4. ✅ Deve aparecer: "🎉 Recebemos!"
5. Verifique no Supabase:
   - https://supabase.com/dashboard/project/mcmxniuokmvzuzqfnpnn/editor
   - Tabela: `marketing_leads_restaurants`
   - ✅ Seu teste deve aparecer

---

## 🔐 VARIÁVEIS DE AMBIENTE (REFERÊNCIA)

### Production:

```env
VITE_SUPABASE_URL=https://mcmxniuokmvzuzqfnpnn.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_i9m4mmIslboVPjiRwPEetA_UbdvKkng
```

### Local Development:

Crie `.env.local`:

```env
VITE_SUPABASE_URL=https://mcmxniuokmvzuzqfnpnn.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_i9m4mmIslboVPjiRwPEetA_UbdvKkng
```

**⚠️ NUNCA commite `.env.local` para o Git!**

---

## 🚀 DEPLOY AUTOMÁTICO

### Como funciona:

1. Você faz `git push` para o GitHub
2. Vercel detecta automaticamente
3. Build é executado
4. Deploy é feito automaticamente
5. ✅ Site atualizado em 2-3 minutos

### Preview Deployments:

- Cada branch/PR gera um preview único
- URL: `https://chefiapp-site-git-branch-name.vercel.app`
- Perfeito para testar antes de merge

---

## 📈 MONITORAMENTO

### Vercel Analytics:

```
https://vercel.com/goldmonkey777/chefiapp-site/analytics
```

Métricas disponíveis:
- **Pageviews:** Visitas totais
- **Top Pages:** Páginas mais acessadas
- **Top Referrers:** De onde vêm os usuários
- **Devices:** Desktop vs Mobile
- **Countries:** Localização dos usuários

### Vercel Logs:

```
https://vercel.com/goldmonkey777/chefiapp-site/logs
```

Útil para:
- Debugar erros de build
- Ver logs de execução
- Monitorar performance

---

## 🎯 PRÓXIMOS PASSOS

### Após Deploy Bem-Sucedido:

1. **Testar tudo** (checklist acima)
2. **Configurar domínio** `chefiapp.com`
3. **Ativar Analytics** (já está no código)
4. **Adicionar logo real** do Sofia Gastrobar
5. **Monitorar leads** no Supabase
6. **Compartilhar** nas redes sociais!

### Melhorias Futuras:

- [ ] Setup Google Analytics 4
- [ ] Adicionar Hotjar (heatmaps)
- [ ] Configurar SEO avançado
- [ ] Criar blog (Next.js migration)
- [ ] A/B testing (Vercel Edge Config)

---

## 📞 SUPORTE

### Documentação Oficial:

- **Vercel Docs:** https://vercel.com/docs
- **Vite Deploy:** https://vitejs.dev/guide/static-deploy.html#vercel
- **Supabase Docs:** https://supabase.com/docs

### Links Úteis:

- **GitHub Repo:** https://github.com/goldmonkey777/chefiapp-site
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Supabase Project:** https://supabase.com/dashboard/project/mcmxniuokmvzuzqfnpnn

---

## ✅ CHECKLIST FINAL

### Antes do Deploy:
- [x] Código no GitHub
- [x] Environment vars documentadas
- [x] .gitignore configurado
- [x] vercel.json configurado
- [x] Build testado localmente

### Durante o Deploy:
- [ ] Importar projeto na Vercel
- [ ] Configurar framework (Vite)
- [ ] Adicionar env vars
- [ ] Iniciar deploy
- [ ] Aguardar build (2-3 min)

### Após o Deploy:
- [ ] Testar site completo
- [ ] Verificar formulário funciona
- [ ] Configurar domínio custom
- [ ] Ativar analytics
- [ ] Monitorar logs

---

## 🎉 BOA SORTE!

Siga este guia passo a passo e seu site estará no ar em minutos!

**From Ibiza with Love — by goldmonkey.studio** 🚀

---

**Última atualização:** 2025-12-04
**Versão:** 1.0.0
**Status:** ✅ Ready for Production
