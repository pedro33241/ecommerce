
import Image from "next/image"
import { Product } from "../../components/product";
import { Footer } from "../../components/footer/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";
import NavBar from "@/components/layouts/navBar/navBar";
const ProductInfo = () => {

    const values = [
        {
            title: "Qualidade",
            description:
                "Produtos certificados alinhados com os padrões internacionais ISO, garantindo durabilidade e desempenho.",
        },
        {
            title: "Confiança",
            description:
                "Parcerias com marcas reconhecidas mundialmente, oferecendo artigos que unem tecnologia e desempenho.",
        },
        {
            title: "Inovação",
            description: "Modernização constante dos nossos serviços para atender às necessidades crescentes do mercado.",
        },
        {
            title: "Excelência",
            description: "Compromisso com a satisfação dos clientes e parceiros, criando soluções que transformam negócios.",
        },
    ]

    const competencies = [
        {
            title: "Ferramentas Manuais e Elétricas",
            description: "Amplo portfólio de produtos de qualidade superior para profissionais e empresas.",
        },
        {
            title: "Serviços Técnicos",
            description: "Suporte especializado e manutenção de equipamentos com excelência técnica.",
        },
        {
            title: "Serviços Comerciais",
            description: "Consultoria e soluções comerciais alinhadas com as necessidades do seu negócio.",
        },
        {
            title: "Serviços Formativos",
            description: "Programas de treinamento e capacitação para desenvolvimento de competências.",
        },
    ]


    return (
        <>
            <NavBar />
            <main className="bg-background text-foreground">
                <section className="relative min-h-[600px] bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
                    {/* Background accent */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gray-800 rounded-full blur-3xl"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 flex flex-col justify-center min-h-[600px]">
                        <div className="max-w-2xl">
                            <p className="text-yellow-400 text-lg font-semibold mb-4 tracking-wider ">SOBRE A DBSD</p>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Acelerando o sucesso com dinamismo
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Uma empresa angolana comprometida com a excelência, oferecendo produtos certificados e soluções inovadoras
                                que transformam negócios.
                            </p>
                        </div>
                    </div>
                </section>
                
                <section className="py-20 sm:py-28 bg-background">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest  mb-4">Nossa Jornada</p>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
                                    Fundada em 2024, com visão para o futuro
                                </h2>

                                <div className="space-y-6 text-gray-700 leading-relaxed">
                                    <p>
                                        A DBSD — Comércio e Prestação de Serviços (SU), Lda. é uma empresa angolana criada com o propósito de
                                        dinamizar e fortalecer as atividades dos nossos clientes e parceiros, garantindo-lhes acesso a produtos
                                        e soluções de qualidade superior.
                                    </p>

                                    <p>
                                        Desde o início, assumimos o compromisso de oferecer valor real através de produtos certificados e
                                        serviços eficientes que contribuem para o crescimento sustentável dos nossos clientes.
                                    </p>

                                    <p>
                                        Atuamos no comércio de ferramentas manuais e elétricas, bem como na prestação de serviços técnicos,
                                        comerciais e formativos, sempre com foco na excelência, confiança e inovação.
                                    </p>
                                </div>
                            </div>

                            <div className="relative h-96 bg-gradient-to-br from-yellow-400 to-yellow-400/5 rounded-lg overflow-hidden">
                                <Image
                                    src="/tools1.jpg"
                                    alt="Espaço de trabalho DBSD com ferramentas"
                                    className="w-[100%] h-[100%] object-cover"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 sm:py-28 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                        <div className="text-center mb-16">
                            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest   mb-4">Nossos Pilares</p>
                            <h2 className="text-4xl sm:text-5xl font-bold">O que nos define</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-lg border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-yellow-400 text-black rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-foreground">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 sm:py-28 bg-background">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                        <div className="text-center mb-16">
                            <p className="text-yellow-400  text-sm font-semibold uppercase tracking-widest mb-4">Competências</p>
                            <h2 className="text-4xl sm:text-5xl font-bold">Áreas de Atuação</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {competencies.map((comp, index) => (
                                <div
                                    key={index}
                                    className="relative p-8 bg-gray-50 rounded-lg border border-gray-200 hover:bg-yellow-600 hover:text-white hover:border-yellow-400 transition-all duration-300 group"
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400 rounded-l-lg"></div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-white">{comp.title}</h3>
                                    <p className="text-gray-600 group-hover:text-white group-hover:text-opacity-90 leading-relaxed">
                                        {comp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 sm:py-28 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="relative h-96 bg-gradient-to-br from-yellow-400 to-yellow-400/5 rounded-lg overflow-hidden order-last lg:order-first">
                                <Image
                                    src="/tools2.png"
                                    alt="Espaço de trabalho DBSD com ferramentas"
                                    className="w-[100%] h-[100%] object-cover"
                                    width={1000}
                                    height={1000}
                                /> </div>

                            <div>
                                <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-4">Visão de Futuro</p>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">Crescendo com propósito</h2>

                                <div className="space-y-6 text-gray-700 leading-relaxed">
                                    <p>
                                        O nosso foco está em continuar a crescer com os nossos clientes e parceiros, ampliando o portfólio de
                                        produtos, modernizando os nossos serviços e tornando-nos uma referência nacional em soluções comerciais
                                        e formativas.
                                    </p>

                                    <p>
                                        Nosso objetivo futuro é expandir a atuação da DBSD a nível nacional e internacional, consolidando
                                        parcerias estratégicas, desenvolvendo novas linhas de produtos e contribuindo para o desenvolvimento de
                                        um mercado mais dinâmico, competitivo e sustentável.
                                    </p>

                                    <p className="text-lg font-semibold text-black pt-4">
                                        Na DBSD, acreditamos que o sucesso se constrói com trabalho, confiança e dinamismo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <Analytics />
            <SpeedInsights />

        </>
    )
}


export default ProductInfo;