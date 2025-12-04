# Partners Logos

## Sofia Gastrobar Logo

Para adicionar o logo do Sofia Gastrobar Ibiza:

1. Salve o logo como: `sofia-gastrobar-logo.png` ou `sofia-gastrobar-logo.svg`
2. Coloque nesta pasta: `/public/partners/`
3. Atualize o componente: `src/components/sections/LabPartner.tsx`

### Como atualizar o componente:

No arquivo `src/components/sections/LabPartner.tsx`, substitua:

```tsx
{/* Logo placeholder - você pode substituir por imagem real */}
<div className="inline-flex items-center justify-center w-32 h-32 mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl shadow-orange-500/25">
  <div className="text-center">
    <div className="text-4xl font-bold text-white">SG</div>
    <div className="text-xs text-orange-100 mt-1">IBIZA</div>
  </div>
</div>
```

Por:

```tsx
{/* Logo real do Sofia Gastrobar */}
<img
  src="/partners/sofia-gastrobar-logo.png"
  alt="Sofia Gastrobar Ibiza"
  className="w-32 h-32 mb-6 rounded-2xl shadow-xl shadow-orange-500/25 object-contain"
/>
```

## Formatos Recomendados

- **PNG:** Fundo transparente, 500x500px mínimo
- **SVG:** Preferível para melhor qualidade
- **WebP:** Para otimização de performance

## Website

https://sofigastrobar.com
