import Image from "next/image"
import Link from 'next/link';
import { MessageCircle, Phone, Mail } from "lucide-react";
import styles from './footer.module.css'

export function Footer() {

    const phone = 933103913;
    const menssage = "Olá! Estou interessado(a) em um produto da sua empresa. Poderia me fornecer mais informações sobre ele, como preço, disponibilidade e características? Obrigado(a)!"
    return (
        <>
            <div id="contact" className=" relative w-full bg-[#F0F0F0] mt-36 pt-16 md:pt-0" style={{
                borderTop: '1px solid',
                borderImageSource: 'linear-gradient(90deg, rgba(1, 2, 2, 0.16) 0%, rgba(255, 255, 255, 0.16) 50%, rgba(1, 2, 2, 0.16) 100%)',
                borderImageSlice: 1
            }}>


                <Image
                    alt="decor-top-left"
                    src="/img.svg"
                    width={116}
                    height={124}
                    className={`${styles.float} top-0 absolute left-0 hidden md:block z-20`}
                />

                <Image
                    alt="decor-top-right"
                    src="/img.svg"
                    width={116}
                    height={124}
                    className={`${styles.floatReverse} top-0 absolute right-0 hidden md:block z-20`}
                />

                <Image
                    alt="decor-bottom-left"
                    src="/img.svg"
                    width={116}
                    height={124}
                    className={`${styles.floatReverse} -mt-2 left-4 absolute bottom-4 hidden md:block z-20`}
                />

                <Image
                    alt="decor-bottom-right"
                    src="/img.svg"
                    width={116}
                    height={124}
                    className={`${styles.float} -mt-2 right-4 absolute bottom-4 hidden lg:block z-20`}
                />





                <div className="flex gap-4 md:gap-10 border border-t-gray-100 shadow-lg flex-col md:flex-row justify-between mx-auto px-4 md:px-12 lg:px-24 py-8 md:py-20 relative z-10 bg-white">

                    <div className="w-full md:w-1/3 flex items-center md:items-start">
                        <Image
                            alt="logo"
                            src="/logo.jpg"
                            width={280}
                            height={8}
                            className="w-44 md:w-64 md:-mt-12 lg:-mt-16"
                        />
                    </div>

                    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

                       

                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm md:text-lg text-[#191c1e] font-semibold">Serviços</h3>
                            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
                            <Link href="/product" className="text-gray-700 hover:text-gray-900 transition-colors">Produtos</Link>
                            <Link href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Suporte</Link>
                            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">Sobre nós</Link>
                        </div>
 <div className="flex flex-col gap-3">
                            <h3 className="text-sm md:text-lg text-[#191c1e] font-semibold">Contactos</h3>
                            <Link href={`https://wa.me/${phone}?text=${menssage}`} target="_blank" className="text-gray-700 flex items-center gap-3 text-[14px] hover:text-gray-900 transition-colors">
                                <MessageCircle size={20} className="text-green-500" />
                                (+244) 933 103 913
                            </Link>
                            <Link href={`https://wa.me/936884447?text=${menssage}`} target="_blank" className="text-gray-700 flex items-center gap-3 text-[14px] hover:text-gray-900 transition-colors">
                                <MessageCircle size={20} className="text-green-500" />
                                (+244) 936 884 337
                            </Link>
                            <Link href={`tel:${phone}`} className="text-gray-700 flex items-center gap-3 text-[14px] hover:text-gray-900 transition-colors">
                                <Phone size={20} className="text-blue-500" />
                                (+244) 933 103 904
                            </Link>
                            <Link href="mailto:dbsd.angola@gmail.com" className="text-gray-700 flex items-center gap-3 text-[14px] hover:text-gray-900 transition-colors">
                                <Mail size={20} className="text-red-500" />
                                dbsd.angola@gmail.com
                            </Link>
                            <p>SEDE: Luanda – Talatona | Bairro Camama, Rua nº 8, Av. Principal do Camama, Casa nº 135</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm md:text-lg text-[#191c1e] font-semibold">Siga-nos</h3>
                            <div className="flex flex-row gap-4 mt-1">
                                <Link href="https://www.facebook.com/profile.php?id=61572482675101" className="text-blue-600 hover:opacity-80" target="_blank" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                                </Link>

                                <Link href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=xfoph8w" className="text-pink-600 hover:opacity-80" target="_blank" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                    </svg>
                                </Link>
                            </div>

                            <p className="text-sm text-gray-700 mt-3">Siga-nos para novidades, promoções e suporte(Quem segue, poupa mais 😉).</p>
                        </div>

                    </div>

                </div>

            </div>
            <div className="w-full bg-gradient-to-r from-[#0f172a] to-[#111827] text-white py-6">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                     <p className="text-xs md:text-sm text-gray-300"> &copy; 2026 DBSD. Todos os direitos reservados. desenvolvido por <Link href="https://wendy-soft.vercel.app/" target="_blank" className="text-blue-300 hover:text-blue-100 underline">WendySoft</Link></p>
                </div>
            </div>
        </>
    )
}