import re

translations = {
    'ar': 'تم تنزيل الصورة! الرجاء إرفاقها في تغريدتك. 📸',
    'en': 'Image downloaded! Please attach it to your tweet. 📸',
    'fr': 'Image téléchargée! Veuillez l\\'attacher à votre tweet. 📸',
    'es': '¡Imagen descargada! Por favor, adjúntela a su tweet. 📸',
    'de': 'Bild heruntergeladen! Bitte fügen Sie es Ihrem Tweet hinzu. 📸',
    'tr': 'Görüntü indirildi! Lütfen tweetinize ekleyin. 📸'
}

with open('translations.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

for lang, text in translations.items():
    # Find the block for this language and insert
    pattern = r'(i18n\.' + lang + r' = \{|' + lang + r': \{)'
    append_str = f'        share_x_downloaded: "{text}",\n'
    js_content = re.sub(pattern, r'\g<1>\n' + append_str, js_content, count=1)

with open('translations.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Added share_x_downloaded to translations.js")
