import React from "react";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="w-full h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/laser-hero.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            智能激光制造解决方案
          </h1>
          <p className="text-white text-lg mb-6">
            为钣金加工、汽车制造、家电五金等行业赋能
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-2xl hover:bg-gray-100"
          >
            了解更多
          </a>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 px-4 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">核心产品</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["激光切割机", "激光焊接机", "激光清洗机"].map((title, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={`/images/product${i + 1}.jpg`}
                alt={title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">
                高精度、高效率、适用于多行业金属加工。
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">应用行业</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {["钣金", "汽车", "厨卫", "电气柜", "新能源"].map((field, i) => (
            <div
              key={i}
              className="p-4 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-lg">{field}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">关于杰克斯光电</h2>
          <p className="text-lg mb-4">
            JEXFOTON 是一家专注于激光设备研发与智能制造的高科技企业，产品涵盖激光切割、焊接、清洗三大系列。我们致力于为全球客户提供高效、稳定、智能的解决方案。
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="py-20 px-4 md:px-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
      >
        <h2 className="text-3xl font-bold mb-4">获取定制化解决方案</h2>
        <p className="mb-6">
          联系我们的技术顾问，快速获取产品资料与报价
        </p>
        <a
          href="mailto:sales@jexfoton.com"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-2xl hover:bg-gray-100"
        >
          立即联系
        </a>
      </section>
    </main>
  );
}
