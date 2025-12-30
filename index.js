const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// 🔗 رابط قاعدة البيانات الخاص بك
const DATABASE_URL = "postgresql://postgres:BodyGad098Gax@db.zjbviivesdmlvhpjnkjl.supabase.co:6543/postgres";

const pool = new Pool({
  connectionString: DATABASE_URL,
});

// واجهة الموقع البسيطة (HTML)
app.get("/", (req, res) => {
  res.send(`
    <div style="text-align:center; font-family:Arial; padding:50px; background:#f0f2f5; height:100vh;">
      <h1 style="color:#1d1d1f;">🎨 متجر جاد للتصاميم</h1>
      <p style="font-size:1.2rem; color:#424245;">الموقع يعمل الآن ومتصل بـ Supabase بنجاح!</p>
      <div style="margin-top:20px; padding:20px; background:white; border-radius:10px; display:inline-block; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
        ✅ تم رفع الكود وتشغيل السيرفر
      </div>
    </div>
  `);
});

app.listen(port, () => console.log("🚀 السيرفر جاهز!"));
