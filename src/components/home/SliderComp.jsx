import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <Slider {...settings}>
          <div className='!flex items-center bg-gray-100 px-6'>
            <div className=''>
                <div className='text-6xl font-bold '>
                ADİDAS ERKEK AYAKKABILAR
                </div>
                <div className='text-lg my-4'>
                adidas sokak giyim ürünleri, stiline klasik, retro bir hava katar. Ayakkabılarımız, sportif aktivitelerin zorluklarını gidermek ve günlük stili tamamlamak için tasarlanmıştır. Ayakkabılar senin için çok sayıda iş görür ve tarzını ortaya koyman için bir araçtır. adidas'ın geliştirdiği malzemeler ve teknolojiler, seni mükemmel bir şekilde desteklemek için dizayn edilmiştir. adidas'ın tasarladığı erkek ayakkabıları, aktif yaşam stiline uyum sağlamak için tasarlandı.
                </div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16  flex items-center justify-center  bg-gray-200'>İncele</div>
            </div>
           <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/7aab75ce5f834325a0d4af5400be16ed_9366/VS_Pace_2.0_3-Stripes_Branding_Synthetic_Nubuck_Ayakkabi_Mavi_HP6011_01_standard.jpg' alt='' />
          </div>
          <div className='!flex items-center bg-gray-100 px-6'>
          <div className=''>
                <div className='text-6xl font-bold '>
                Farklı olanlar için tasarlandı: adidas erkek ayakkabılar
                </div>
                <div className='text-lg my-4'>
                Originals, adidas by Stella McCartney veya TERREX vb. serilerden hangi birisini seçersen seç spor adidas ayakkabılar ile sadece bir sonraki antrenmanında değil, antrenmana giderken de etki bırakacaksın. adidas Originals ile daima efsane olmaya devam et. Marka, rahat retro tarzına rağmen tekrar tekrar bizi statükoyu sorgulamaya teşvik ediyor. Performance, stilinden ödün vermek istemeyen sporcular için tasarlandı; bu seri net performans odaklı retro tasarımlarla öne çıkar. Koşullardan bağımsız güvenebileceğin performans ile işlevsel tasarımı bir arada mı arıyorsun? adidas Terrex, tamamen outdoor aktivitelerine odaklanmış olmasıyla en mükemmel yoldaşındır. Disney, UltraBoost ve Ozweego koleksiyonlarında spor ayakkabılar bulacaksın. NMD koleksiyonu, giyim ürünleri, ayakkabılar veya aksesuarlar ile, markamızın mirasını inovatif tasarımla bir araya getirir. Koşu stiliyle kentli görünümü yarat. adidas, sporcular ve sneaker tutkunları arasında popülerdir. İhtiyaçların doğrultusunda geliştirilmiş çeşitli modellerle seni destekliyoruz. adidas ayakkabılar, beyaz, mavi, turuncu ve birçok farklı renk seçeneğinde mevcuttur.
                </div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16  flex items-center justify-center  bg-gray-200'>İncele</div>
            </div>
           <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/5ca02ad6273c42e59108af4900f4acd8_9366/VS_Pace_2.0_3-Stripes_Branding_Synthetic_Nubuck_Ayakkabi_Beyaz_HP6010_01_standard.jpg' alt=''/>
          </div>
         
         
        </Slider>
       

    </div>
  )
}

export default SliderComp;