VIO BULZ COACHING — UPDATE SITE
================================

CE CONȚINE PACHETUL
1. carte.html — pagina de vânzare a ghidului la 55 LEI.
2. Vio_Bulz_Ghid_Complet_Fitness_Coaching_55_LEI.pdf — PDF-ul furnizat de Vio Bulz.
3. onboarding.html — formularul de coaching, cu redirecționare corectă după trimitere.
4. multumesc.html — pagina afișată după trimiterea formularului.
5. config.js — aici vei lipi linkurile Payhip.

PASUL 1 — UPLOAD PE GITHUB
În repository-ul:
https://github.com/viorelb90/vio-bulz-coaching

Apasă Add file → Upload files și încarcă TOATE fișierele din acest pachet în rădăcina repository-ului.
Dacă GitHub întreabă de înlocuire pentru onboarding.html, acceptă.

PASUL 2 — FORMULAR + EMAIL
Formularul este configurat pentru:
viorelbulz90@gmail.com

FormSubmit cere o confirmare inițială a adresei. După primul test, verifică emailul și apasă linkul de activare. După activare, următoarele aplicații vor fi trimise la email.
Pagina de mulțumire este:
https://viorelb90.github.io/vio-bulz-coaching/multumesc.html

PASUL 3 — PLATA
Recomand Payhip + Stripe:
- creezi produsul digital „Vio Bulz — Ghidul Complet de Fitness & Coaching”
- preț: 55 LEI
- încarci PDF-ul din acest pachet
- conectezi Stripe în Payhip
- Payhip poate livra automat PDF-ul după plata reușită

Apoi copiezi linkul produsului Payhip în config.js la:
payhipGuideUrl

PASUL 4 — COACHING
În Payhip poți crea produse de tip Coaching Service și planuri recurente cu Stripe.
Pachetele actuale:
- BASIC — 500 LEI / lună
- TRANSFORM — 800 LEI / lună
- TRANSFORM — 3 luni — 2.000 LEI
- PREMIUM — 1.000 LEI / lună

După ce creezi produsele, lipește linkurile lor în config.js.

IMPORTANT
Nu pune chei secrete Stripe în GitHub. Pentru varianta Payhip/Payment Links, pe site folosim doar linkurile publice de checkout.

TESTE
1. Deschide site-ul.
2. Intră pe formular.
3. Completează cu date de test și trimite.
4. Verifică emailul viorelbulz90@gmail.com și activează FormSubmit dacă este prima trimitere.
5. Verifică redirecționarea către multumesc.html.
6. Pentru PDF, testează întâi produsul Payhip cu un cupon de 100% reducere, apoi verifică dacă primești pagina/emailul de download.

NOTĂ
În index.html trebuie adăugat un buton/link către carte.html, de exemplu:
<a href="carte.html">GHIDUL COMPLET — 55 LEI</a>
și un link către:
<a href="onboarding.html">APLICĂ PENTRU COACHING</a>
