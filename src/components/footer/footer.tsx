import { Facebook } from "lucide-react";
import Image from "next/image"
import Link from 'next/link';
import { MessageCircle, Phone, Mail } from "lucide-react";

export function Footer() {

    const phone = 933103913;
    const menssage = "Olá! Estou interessado(a) em um produto da sua empresa. Poderia me fornecer mais informações sobre ele, como preço, disponibilidade e características? Obrigado(a)!"
    return (
        <>
            <div id="contact" className=" relative w-full bg-[#f9fbfc] mt-36 pt-16 md:pt-0" style={{
                borderTop: '1px solid',
                borderImageSource: 'linear-gradient(90deg, rgba(1, 2, 2, 0.16) 0%, rgba(255, 255, 255, 0.16) 50%, rgba(1, 2, 2, 0.16) 100%)',
                borderImageSlice: 1
            }}>


                <Image
                    alt="star"
                    src="img.svg"
                    width={116}
                    className=" top-0 absolute left-0 hidden md:block"
                    height={124}
                />

                <Image
                    alt="star"
                    src="img.svg"
                    width={116}
                    className=" top-0 absolute right-0 hidden md:block"
                    height={124}
                />

                <Image
                    alt="star"
                    src="img.svg"
                    width={116}
                    className="-mt-2 left-0 absolute bottom-4 hidden md:block"
                    height={124}
                />

                <Image
                    alt="star"
                    src="img.svg"
                    width={116}
                    className="-mt-2 right-0 absolute bottom-4 hidden lg:block"
                    height={124}
                />





                <div className="flex gap-4 md:gap-10 border border-t-gray-100 shadow-lg flex-col md:flex-row justify-between mx-auto px-4 md:px-12 lg:px-24 py-12 md:py-32 relative z-10">

                    <aside className="w-full text-[#2E323A99] flex flex-col items-center md:items-start">
                        <Image
                            alt="logo"
                            src="/logo.jpg"
                            width={280}
                            height={8}
                            className="w-48 md:w-80 md:-mt-20 lg:-mt-24"
                        />
                    </aside>
                    <div className="flex flex-col md:flex-row w-full gap-6 md:gap-24 lg:gap-36">


                        <aside className="flex flex-col gap-2 md:gap-3">
                            <h3 className="text-sm md:text-lg lg:text-[18px] text-[#191c1e] font-semibold">Serviços</h3>



                            <Link href="/" className="text-[#2E323A99] flex flex-row gap-3 text-xs md:text-[14px] hover:text-gray-900 transition-colors">
                                Home</Link>
                            <Link href="/product" className="text-[#2E323A99] flex flex-row gap-3 text-xs md:text-[14px] hover:text-gray-900 transition-colors">
                                Produtos</Link>
                        </aside>




                        <aside className="flex flex-col gap-3">
                            <h3 className="sx:text-[13px] lg:text-[18px] text-[#191c1e]">Contactos </h3>


                            <Link href={`https://wa.me/${phone}?text=${menssage}`} target="_blank" className=" text-[#2E323A99] flex flex-row gap-3 text-[14px] ">   
                                <MessageCircle size={20} className="text-green-500" />
                                (+244)&nbsp;933 103 913</Link>



                            <Link href={`https://wa.me/936884447?text=${menssage}`} target="_blank" className=" text-[#2E323A99] flex flex-row gap-3 text-[14px] ">   
                                <MessageCircle size={20} className="text-green-500" />
                                (+244)&nbsp;936 884 447</Link>



                            <Link href={`tel:${phone}`} target="_blank" className=" text-[#2E323A99] flex flex-row gap-3 text-[14px] ">   
                                <Phone size={20} className="text-blue-500" />
                                (+244)&nbsp;933 103 904</Link>


                            <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" className=" text-[#2E323A99]  flex flex-row gap-3  text-[14px]">   
                                <Mail size={20} className="text-red-500" />
                                dbsd.angola@gmail.com</Link>
                            
                            <div className="flex flex-row gap-4 mt-4">
                                <Link href="https://www.facebook.com/profile.php?id=61572482675101" className="text-blue-500" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                                </Link>

                                <Link href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=xfoph8w" className="text-pink-600" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                    </svg>  </Link>
                            </div>
                        </aside>
                    </div>

                </div>

            </div>
        </>
    )
}