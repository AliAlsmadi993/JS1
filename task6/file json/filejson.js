// ربط زر تحميل المستخدمين بالكود
var loadButton = document.getElementById('loadButton');

// إضافة حدث النقر على الزر
loadButton.addEventListener('click', function() {
    // جلب بيانات المستخدمين من ملف JSON
    fetch('user.json')
        .then(function(response) {
            // التأكد من أن الاستجابة تحتوي على البيانات المطلوبة
            return response.json();
        })
        .then(function(data) {
            // تحديد مكان عرض الكروت
            var cardContainer = document.getElementById('cardContainer');
            // إظهار الحاوية عند تحميل البيانات
            cardContainer.style.display = 'flex';

            // مسح أي محتوى موجود مسبقًا
            cardContainer.innerHTML = '';

            // إنشاء الكروت لكل مستخدم
            for (var i = 0; i < data.length; i++) {
                var user = data[i];

                // إنشاء العنصر الخاص بالكارد
                var card = document.createElement('div');
                card.className = 'card';

                // إضافة محتوى الكارد
                card.innerHTML = '<h2>' + user.name + '</h2>' +
                                 '<p><strong>Age:</strong> ' + user.age + '</p>' +
                                 '<p><strong>Email:</strong> ' + user.email + '</p>' +
                                 '<p><strong>Profession:</strong> ' + user.profession + '</p>';

                // إضافة الكارد إلى الحاوية
                cardContainer.appendChild(card);
            }
        })
        .catch(function(error) {
            // التعامل مع الأخطاء في حال وجودها
            console.error('Error fetching data:', error);
        });
});
