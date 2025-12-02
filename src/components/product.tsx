"use client";
import Image from "next/image"; 
import { UseSearch } from "@/hook/useSearch";  

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useStore } from "@/hook/useZustand";

type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
};


export function Product() {

    const objectMaterial = [
        {
            id: 3,
            name: "FERRAMENTAS ELÉTRICAS",
            background: "#E5E8FF",
            color: "#00008B",
            description: "",
            image: "electric.svg",
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2V5" stroke="#00008B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 2V5" stroke="#00008B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 18V22" stroke="#00008B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.6939 8.5L10.6029 10.6749C10.3788 10.9079 10.5394 11.2433 10.9048 11.3053L13.0952 11.6773C13.4848 11.7434 13.6334 12.1147 13.361 12.3413L10.7666 14.5" stroke="#00008B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.3066 5H9.69342C7.5551 5 6.48594 5 5.89527 5.69774C5.3046 6.39548 5.46717 7.46639 5.79232 9.60823L6.31604 13.0581C6.83606 16.4836 8.28588 18 12 18C15.7141 18 17.1639 16.4836 17.684 13.0581L18.2077 9.60823C18.5328 7.46639 18.6954 6.39548 18.1047 5.69774C17.5141 5 16.4449 5 14.3066 5Z" stroke="#00008B" stroke-width="1.5" />
            </svg>

        },
        {
            id: 4,
            name: "FERRAMENTAS MANUAIS",
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "wrench.svg",
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3584 13.3567C19.1689 14.546 16.9308 14.4998 13.4992 14.4998C11.2914 14.4998 9.50138 12.7071 9.50024 10.4993C9.50024 7.07001 9.454 4.83065 10.6435 3.64138C11.8329 2.45212 12.3583 2.50027 17.6274 2.50027C18.1366 2.49809 18.3929 3.11389 18.0329 3.47394L15.3199 6.18714C14.6313 6.87582 14.6294 7.99233 15.3181 8.68092C16.0068 9.36952 17.1234 9.36959 17.8122 8.68109L20.5259 5.96855C20.886 5.60859 21.5019 5.86483 21.4997 6.37395C21.4997 11.6422 21.5479 12.1675 20.3584 13.3567Z" stroke="#1E90FF" stroke-width="1.5" />
                <path d="M13.5 14.5L7.32842 20.6716C6.22386 21.7761 4.433 21.7761 3.32843 20.6716C2.22386 19.567 2.22386 17.7761 3.32843 16.6716L9.5 10.5" stroke="#1E90FF" stroke-width="1.5" stroke-linecap="round" />
                <path d="M5.50896 18.5H5.5" stroke="#FFA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        },
        {
            id: 1,
            name: "UTENSÍLIOS DE COZINHA",
            background: "#E5E8FF",
            color: "#00008B",
            description: "",
            image: "category.svg",
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 3.00195L15.0606 6.44129C14.4748 7.02708 14.4748 7.97683 15.0606 8.56261L15.75 9.25195M15.75 9.25195L16.4393 9.94129C17.0251 10.5271 17.9748 10.5271 18.5606 9.94129L22 6.50195M15.75 9.25195L4 21.002" stroke="#00008B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20 4.99902L17.5 7.49902" stroke="#00008B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.98914 8.99011C6.79472 10.1845 5.15674 10.4831 3.66377 8.99011C2.17075 7.49709 1.38801 4.77783 2.58243 3.58341C3.77685 2.38899 6.49611 3.17172 7.98914 4.66475C9.48211 6.15772 9.18356 7.79569 7.98914 8.99011ZM7.98914 8.99011L20 21.001" stroke="#00008B" stroke-width="1.5" stroke-linecap="round" />
                <path d="M9.20542 2.39669C10.0923 2.13908 11.03 2.00098 12 2.00098C13.1517 2.00098 14.2579 2.19567 15.2876 2.55394M2.04937 11.001C2.01672 11.3299 2 11.6635 2 12.001C2 14.0328 2.60598 15.9231 3.64707 17.501M7.77267 21.0661C9.05671 21.6659 10.4892 22.001 12 22.001C13.5244 22.001 14.9691 21.6599 16.262 21.0499M20.3529 17.501C21.394 15.9231 22 14.0328 22 12.001C22 11.4228 21.9509 10.8561 21.8567 10.3048" stroke="#00008B" stroke-width="1.5" stroke-linecap="round" />
            </svg>

        },
        {
            id: 2,
            name: "ILUMINAÇÃO",
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "luz.svg",
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.08938 14.999C5.71097 14.1484 5.5 13.2021 5.5 12.2049C5.5 8.50135 8.41015 5.49902 12 5.49902C15.5899 5.49902 18.5 8.50135 18.5 12.2049C18.5 13.2021 18.289 14.1484 17.9106 14.999" stroke="#1E90FF" stroke-width="1.5" stroke-linecap="round" />
                <path d="M12 1.99902V2.99902" stroke="#1E90FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 11.999H21" stroke="#1E90FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 11.999H2" stroke="#1E90FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.0704 4.92773L18.3633 5.63484" stroke="#1E90FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.6368 5.63582L4.92969 4.92871" stroke="#1E90FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.517 19.3055C15.5274 18.9786 15.9326 18.0538 16.0466 17.1236C16.0806 16.8458 15.852 16.6152 15.572 16.6152L8.47686 16.6154C8.18726 16.6155 7.95468 16.8612 7.98926 17.1488C8.10091 18.0771 8.38271 18.7553 9.45346 19.3055M14.517 19.3055C14.517 19.3055 9.62972 19.3055 9.45346 19.3055M14.517 19.3055C14.3955 21.2505 13.8338 22.0207 12.0068 21.9991C10.0526 22.0352 9.60304 21.0831 9.45346 19.3055" stroke="#1E90FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        }, {
            id: 5,
            name: "ACESSÓRIOS E CONSUMÍVEIS DE DESGASTE RÁPIDO",
            background: "#E5E8FF",
            color: "#00008B",
            description: "",
            image: "recycle.svg",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-recycle" viewBox="0 0 16 16">
                <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z" />
            </svg>
        }, {
            id: 6,
            name: "HIGIENE E SEGURANÇA",
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "droplet.svg",
            svg: <svg enableBackground="new 0 0 128 128" width={24} viewBox="0 0 128 128" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  > <path d="M31.942,4c1.768,0,3.203,1.705,3.203,3.808v10.946v16.738c0,1.051,0.718,1.903,1.602,1.903 c0.884,0,1.602-0.853,1.602-1.903V18.754v-2.379v-4.76c0-2.103,1.434-3.807,3.201-3.807c1.77,0,3.202,1.705,3.202,3.807v4.76v2.379 v16.738c0,1.051,0.718,1.903,1.602,1.903s1.601-0.853,1.601-1.903V18.754h0.041c0.198-1.875,1.53-3.332,3.162-3.332 c1.769,0,3.202,1.705,3.202,3.808c0,21.259,0.198,42.517,0.198,63.776c0,0.271-0.021,0.535-0.052,0.797h0.052 c0,0-0.408,3.461-0.921,4.914c-2.06,5.852,0.612,21.297,2.139,28.924c2.639,0.668,4.226,1.51,4.226,2.426 c0,2.173-8.85,3.935-19.767,3.935s-19.767-1.762-19.767-3.935c0-0.881,1.47-1.69,3.924-2.347c0.476-7.495,1.066-22.771-1.443-29.43 c-2.643-7.011-4.694-9.937-6.283-13.229C13.049,67.563,4.448,43.69,4.448,43.69c-1.115-2.861-0.067-6.256,2.34-7.582 c0.653-0.36,1.339-0.53,2.015-0.53c1.813,0,3.55,1.227,4.362,3.312l5.969,15.327V11.615c0-2.103,1.435-3.807,3.203-3.807 c1.769,0,3.203,1.705,3.203,3.807v7.139v16.738c0,1.051,0.716,1.903,1.601,1.903c0.884,0,1.601-0.853,1.601-1.903V18.754v-2.379 V7.808C28.74,5.705,30.173,4,31.942,4 M54.557,83.803h0.005 M31.942,0c-2.899,0-5.403,1.866-6.544,4.549 c-0.93-0.475-1.968-0.741-3.063-0.741c-3.972,0-7.203,3.502-7.203,7.807v22.912c-1.627-1.852-3.895-2.948-6.331-2.948 c-1.361,0-2.725,0.354-3.944,1.026c-4.15,2.285-5.97,7.76-4.159,12.484c0.531,1.473,8.741,24.201,12.363,31.71 c0.501,1.04,1.03,2.018,1.589,3.053c1.3,2.404,2.774,5.131,4.554,9.852c1.477,3.918,1.965,13.197,1.347,25.109 c-1.972,0.893-4.085,2.465-4.085,5.254c0,4.912,6.545,6.216,9.009,6.705c3.983,0.793,9.224,1.229,14.758,1.229 c5.534,0,10.775-0.437,14.758-1.229c2.464-0.489,9.009-1.793,9.009-6.705c0-3.065-2.566-4.678-4.757-5.533 c-2.688-14.176-2.735-21.928-1.834-24.486c0.58-1.645,0.97-4.535,1.101-5.611c0.032-0.205,0.05-0.416,0.05-0.631 c0-0.111-0.005-0.224-0.014-0.334c0.007-0.156,0.011-0.311,0.011-0.463c0-10.639-0.051-21.451-0.1-31.907 c-0.048-10.447-0.099-21.249-0.099-31.869c0-4.305-3.23-7.808-7.202-7.808c-0.841,0-1.651,0.157-2.405,0.448v-0.255 c0-4.305-3.23-7.807-7.202-7.807c-1.094,0-2.132,0.266-3.062,0.741C37.346,1.867,34.841,0,31.942,0L31.942,0z" fill="#1E90FF" /> <path d="M96.059,4c1.769,0,3.201,1.705,3.201,3.808v8.567v2.379v16.738c0,1.051,0.717,1.903,1.602,1.903 s1.601-0.853,1.601-1.903c0,0,0-16.738,0.001-16.738v-7.139c0-2.103,1.436-3.807,3.202-3.807c1.769,0,3.203,1.705,3.203,3.807 v42.602l5.969-15.327c0.813-2.085,2.55-3.312,4.361-3.312c0.676,0,1.362,0.17,2.016,0.53c2.408,1.326,3.455,4.721,2.341,7.582 c0,0-8.603,23.873-12.219,31.371c-1.589,3.295-3.641,6.22-6.281,13.229c-2.511,6.657-1.921,21.935-1.443,29.431 c2.453,0.654,3.924,1.465,3.924,2.346c0,2.173-8.85,3.935-19.768,3.935c-10.916,0-19.768-1.763-19.768-3.937 c0-0.916,1.587-1.756,4.227-2.424c1.525-7.627,4.197-23.074,2.139-28.925c-0.514-1.452-0.922-4.914-0.922-4.914h0.053 c-0.031-0.262-0.053-0.524-0.053-0.797c0-21.259,0.199-42.517,0.199-63.776c0-2.103,1.434-3.808,3.201-3.808 c1.633,0,2.965,1.456,3.162,3.332h0.041v16.738c0,1.051,0.717,1.903,1.602,1.903c0.884,0,1.602-0.853,1.602-1.903V18.754v-2.379 v-4.76c0-2.103,1.434-3.807,3.202-3.807s3.2,1.705,3.2,3.807v4.76v2.379v16.738c0,1.051,0.719,1.903,1.603,1.903 s1.603-0.853,1.603-1.903V18.754V7.808C92.855,5.705,94.29,4,96.059,4 M73.438,83.803h0.006 M96.059,0  c-2.898,0-5.404,1.867-6.545,4.549c-0.931-0.475-1.969-0.741-3.063-0.741c-3.973,0-7.202,3.502-7.202,7.807v0.255 c-0.754-0.291-1.563-0.448-2.405-0.448c-3.972,0-7.201,3.502-7.201,7.808c0,10.62-0.052,21.422-0.1,31.869 c-0.049,10.456-0.1,21.268-0.1,31.907c0,0.152,0.004,0.307,0.011,0.463c-0.009,0.11-0.015,0.223-0.015,0.334 c0,0.215,0.019,0.426,0.051,0.631c0.131,1.076,0.521,3.967,1.101,5.611c0.901,2.559,0.854,10.311-1.834,24.486 c-2.19,0.855-4.757,2.468-4.757,5.533c0,4.912,6.545,6.215,9.009,6.705c3.982,0.793,9.224,1.229,14.759,1.229 c5.533,0,10.773-0.437,14.758-1.229c2.463-0.49,9.009-1.793,9.009-6.705c0-2.789-2.113-4.361-4.086-5.254 c-0.617-11.912-0.13-21.191,1.348-25.109c1.779-4.721,3.254-7.446,4.554-9.852c0.561-1.035,1.088-2.013,1.59-3.053 c3.623-7.509,11.832-30.237,12.363-31.71c1.812-4.724-0.01-10.199-4.158-12.484c-1.221-0.671-2.584-1.026-3.945-1.026 c-2.436,0-4.703,1.097-6.33,2.948v-22.91c0-4.305-3.23-7.807-7.203-7.807c-1.094,0-2.132,0.266-3.063,0.741 C101.461,1.866,98.957,0,96.059,0L96.059,0z" fill="#1E90FF" /></svg>

        }, {
            id: 7,
            name: "BATERIA",
            background: "#E5E8FF",
            color: "#00008B",
            description: "",
            image: "setup.svg",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-battery" viewBox="0 0 16 16">
                <path d="M0 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm14 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8" />
            </svg>

        }, {
            id: 8,
            name: "COLA E RESISTENTE",
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "luz.svg",
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z" stroke="#1E90FF" stroke-width="1.5" />
                <path d="M16 14C16 16.2091 14.2091 18 12 18" stroke="#1E90FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        }, {
            id: 9,
            name: "ADITIVO DE LIMPEZA",
            background: "#E5E8FF",
            color: "#00008B",
            description: "",
            image: "backpack.svg",
            svg: <svg viewBox="0 0 64 64" width={24} xmlns="http://www.w3.org/2000/svg"> <g data-name="11" id="_11"> <path d="M38,21.07s0,0,0-.07V19h1a1,1,0,0,0,1-1V15h5a1,1,0,0,0,.86-.49,1,1,0,0,0,0-1L42.11,6.74A5.33,5.33,0,0,0,37.45,4H21a1,1,0,0,0-1,1H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h.1A21.33,21.33,0,0,1,16,17.86a21.77,21.77,0,0,1-3.83,9.56,1,1,0,0,0,.1,1.28A1,1,0,0,0,13,29a1,1,0,0,0,.56-.17A17.5,17.5,0,0,0,21,18.2,15.58,15.58,0,0,0,21.3,15H24v3a1,1,0,0,0,1,1h1v2a.88.88,0,0,0,.06.28,1,1,0,0,0-.16.2l-6,9.93A13.38,13.38,0,0,0,18,38.34v16.9A5.6,5.6,0,0,0,23.42,61H40.58A5.6,5.6,0,0,0,46,55.24V30.71A9.52,9.52,0,0,0,38,21.07ZM17,7h3v4H17Zm2,10.8a13.83,13.83,0,0,1-2.22,5.1A22.73,22.73,0,0,0,18,18.14,23.24,23.24,0,0,0,18.12,13h1A13.8,13.8,0,0,1,19,17.8ZM22,12V6H37.45a3.33,3.33,0,0,1,2.91,1.71L43.3,13H22Zm16,3v2H26V15Zm-2,4v1H28V19Zm-8.68,4h9.59C40.82,23,44,26.46,44,30.71V38H20a11.47,11.47,0,0,1,.84-4A.7.7,0,0,0,21,34h5a1,1,0,0,0,0-2H21.89l.67-1.11A1.06,1.06,0,0,0,23,31h5a1,1,0,0,0,0-2H23.7l.6-1H29a1,1,0,0,0,0-2H25.51ZM44,48H20V40H44ZM40.58,59H23.42A3.61,3.61,0,0,1,20,55.24V50H44v5.24A3.61,3.61,0,0,1,40.58,59Z" fill="#00008B" />  <path d="M42,37a1,1,0,0,0,1-1V31a1,1,0,0,0-2,0v5A1,1,0,0,0,42,37Z" fill="#8A2BE2" /> <path d="M42,51a1,1,0,0,0-1,1v2.34A1.67,1.67,0,0,1,39.34,56H38a1,1,0,0,0,0,2h1.34A3.66,3.66,0,0,0,43,54.34V52A1,1,0,0,0,42,51Z" fill="#00008B"/> </g></svg>
        }
    ]

    const { filterProductLuz, filterProduct, kitchenProductFiltered,filterManualProducts, filterResistanceProducts, filterCleaningProducts, filterBatteryProducts, filterHygieneSafetyProducts,handleChangeSearch, filterAccessoryProducts, handleTabChange, activeTab } = UseSearch();

    const { addData } = useStore()

    const handleAddToCart = (product: ProductType) => {
        addData(product)
     
    }
    return (
        <>
            <div className="mt-36">
                <h1 className="font-semibold ml-10 lg:text-[22px] sm:text-[19px] text-black">Categorias De Produtos</h1>

                <div className="tabs mt-7 ml-10 flex flex-wrap gap-4 justify-between">
             
                    <div className="flex flex-wrap gap-5 w-full">
            
                        {objectMaterial.map((item) => (
                            <button
                                key={item.id}
                                className={` flex flex-row gap-4 pt-4 rounded-[15px] h-[60px] justify-center px-4 py-auto text-[14px] font-medium ${activeTab === item?.id ? "active" : ""}`}
                                style={{ background: `${item?.background}`, color:`${ item?.color}`}}
                                onClick={() => handleTabChange(item?.id)}
                            >
                              {item.svg}
                                <span className="mt-1">{item?.name}</span>
                            </button>

                        ))}
                    </div>
                    


                <div className="flex border-gray-400 border h-[48px] w-[330px] mr-4 rounded-lg bg-white flex-row gap-1">
                        <input 
                            type="text" 
                            placeholder="Pesquisar Produto..." 
                            onChange={handleChangeSearch} 
                            className="w-full pl-3 outline-none rounded-sm" 
                        />
                        <Image
                            src="/search.svg"
                            alt="search"
                            width={20}
                            height={20}
                            className="m-3"
                        />
                    </div>
                </div>

                <div className="tab-content mb-12 mt-10">
                {activeTab === 1 && (
                        <div>    <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Produtos Elétricos</h2>
                            <div className="lg:ml-10 sm:ml-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-24">
                                {kitchenProductFiltered?.length > 0 ? kitchenProductFiltered?.map((item: ProductType) => (
                                    <Card key={item.id} className="group overflow-hidden border-border  transition-all hover:shadow-lg">
                                        <div className="relative overflow-hidden ">
                                            <Image
                                                alt={item.alt}
                                                src={item.srcImage}
                                                width={110}
                                                height={110}
                                                className="h-full w-[180px]  flex justify-between text-center mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <CardContent className="p-6">
                                            <div className="mb-2 flex items-start justify-between gap-2">
                                                <h3 className="font-serif text-[12px] leading-tight text-foreground">
                                                    {item.nameProduct}
                                                </h3>
                                                <Button
                                                    size="icon"
                                                    variant="outline"
                                                    onClick={() => handleAddToCart(item)}
                                                    className="shrink-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <p className="mb-4 text-[12px] leading-relaxed text-muted-foreground">
                                                {item.details}
                                            </p>
                                        </CardContent>
                                    </Card>

                                
                                )) : (
                                    <div className="mx-auto gap-3 flex text-center flex-col justify-center items-center text-gray-400 text-xl w-full h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                               
                            </div>
                        </div>
                    )}



                    {activeTab === 2 && (
                        <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Produtos de Lâmpadas</h2>
                            <div className="lg:ml-10 sm:ml-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-24">
                          {filterProductLuz.length > 0 ? filterProductLuz.map((item: ProductType) => (
                                    <Card key={item.id} className="group overflow-hidden border-border  transition-all hover:shadow-lg">
                                        <div className="relative overflow-hidden  h-48 w-full flex items-center justify-center">
                                      <Image
                                          alt={item.alt}
                                          src={item.srcImage}
                                          width={110}
                                          height={110}
                                          className="h-full w-[180px]  flex justify-between text-center mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                      />
                                        </div>
                                  <CardContent className="p-6">
                                      <div className="mb-2 flex items-start justify-between gap-2">
                                          <h3 className="font-serif text-[12px] leading-tight text-foreground">
                                              {item.nameProduct}
                                          </h3>
                                          <Button
                                              size="icon"
                                              variant="outline"
                                              onClick={() => handleAddToCart(item)}
                                              className="shrink-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                                          >
                                              <Plus className="h-4 w-4" />
                                          </Button>
                                      </div>
                                      <p className="mb-4 text-[12px] leading-relaxed text-muted-foreground">
                                          {item.details}
                                      </p>
                                  </CardContent>
                                    </Card>


                                )) : (
                                    <div className="mx-auto gap-3 flex flex-col justify-center items-center text-gray-400 text-xl h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                           
                            </div>
                        </div>
                    )}


                    {activeTab === 3 && (
                        <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Ferramentas Elétricas</h2>
                            <div className="lg:ml-10 sm:ml-0  flex-wrap justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
                                {filterProduct?.length > 0 ? filterProduct?.map((item: ProductType) => (
                                    <Card key={item.id} className="group overflow-hidden border-border  transition-all hover:shadow-lg">
                                        <div className="relative overflow-hidden  h-48 w-full flex items-center justify-center">
                                            <Image
                                                alt={item.alt}
                                                src={item.srcImage}
                                                width={110}
                                                height={110}
                                                className="h-full w-[180px]  flex justify-between text-center mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <CardContent className="p-6">
                                            <div className="mb-2 flex items-start justify-between gap-2">
                                                <h3 className="font-serif text-[12px] leading-tight text-foreground">
                                                    {item.nameProduct}
                                                </h3>
                                                <Button
                                                    size="icon"
                                                    variant="outline"
                                                    onClick={() => handleAddToCart(item)}
                                                    className="shrink-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <p className="mb-4 text-[12px] leading-relaxed text-muted-foreground">
                                                {item.details}
                                            </p>
                                        </CardContent>
                                    </Card>


                                )) : (
                                    <div className="mx-auto gap-3 flex flex-col justify-center items-center text-gray-400 text-xl h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                            </div>
                        </div>
                    )}


                    {activeTab === 4 && (
                        <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Ferramentas Manuais</h2>
                            <div className="lg:ml-10 sm:ml-0  flex-wrap justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
                               {filterManualProducts.length > 0 ? filterManualProducts.map((item: ProductType) => (
                                   <Card key={item.id} className="group overflow-hidden border-border  transition-all hover:shadow-lg">
                                       <div className="relative overflow-hidden  h-48 w-full flex items-center justify-center">
                                           <Image
                                               alt={item.alt}
                                               src={item.srcImage}
                                               width={110}
                                               height={110}
                                               className="h-full w-[180px]  flex justify-between text-center mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                           />
                                       </div>
                                       <CardContent className="p-6">
                                           <div className="mb-2 flex items-start justify-between gap-2">
                                               <h3 className="font-serif text-[12px] leading-tight text-foreground">
                                                   {item.nameProduct}
                                               </h3>
                                               <Button
                                                   size="icon"
                                                   variant="outline"
                                                   onClick={() => handleAddToCart(item)}
                                                   className="shrink-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                                               >
                                                   <Plus className="h-4 w-4" />
                                               </Button>
                                           </div>
                                           <p className="mb-4 text-[12px] leading-relaxed text-muted-foreground">
                                               {item.details}
                                           </p>
                                       </CardContent>
                                   </Card>

                                )) : (
                                    <div className="mx-auto gap-3 flex flex-col justify-center items-center text-gray-400 text-xl h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                          
                            </div>
                        </div>
                    )}

                    {activeTab === 5 && (
                        <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Acessórios</h2>
                            <div className="lg:ml-10 sm:ml-0  flex-wrap justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
                                {filterAccessoryProducts.length > 0 ? filterAccessoryProducts.map((item: ProductType) => (
                                    <Card key={item.id} className="group overflow-hidden border-border  transition-all hover:shadow-lg">
                                        <div className="relative overflow-hidden  h-48 w-full flex items-center justify-center">
                                            <Image
                                                alt={item.alt}
                                                src={item.srcImage}
                                                width={110}
                                                height={110}
                                                className="h-full w-[180px]  flex justify-between text-center mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <CardContent className="p-6">
                                            <div className="mb-2 flex items-start justify-between gap-2">
                                                <h3 className=" text-xl leading-tight text-foreground">
                                                    {item.nameProduct}
                                                </h3>
                                                <Button
                                                    size="icon"
                                                    variant="outline"
                                                    onClick={() => handleAddToCart(item)}
                                                    className="shrink-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                                                {item.details}
                                            </p>
                                        </CardContent>
                                    </Card>


                                )) : (
                                    <div className="mx-auto gap-3 flex flex-col justify-center items-center text-gray-400 text-xl h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                            </div>
                        </div>
                    )}

                    {activeTab === 6 && ( 
                          <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Produtos de Higiene e Segurança</h2>
                            <div className="lg:ml-10 sm:ml-0  flex-wrap justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
                                {filterHygieneSafetyProducts.length > 0 ? filterHygieneSafetyProducts.map((item: ProductType) => (
                                    <Card key={item.id}  className="group overflow-hidden border-border  transition-all hover:shadow-lg">
                                        <div className="relative overflow-hidden  h-48 w-full flex items-center justify-center">
                                            <Image
                                                alt={item.alt}
                                                src={item.srcImage}
                                                width={110}
                                                height={110}
                                                className="h-full w-[180px]  flex justify-between text-center mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <CardContent className="p-6">
                                            <div className="mb-2 flex items-start justify-between gap-2">
                                                <h3 className="font-serif text-[12px] leading-tight text-foreground">
                                                    {item.nameProduct}
                                                </h3>
                                                <Button
                                                    size="icon"
                                                    variant="outline"
                                                    onClick={() => handleAddToCart(item)}
                                                    className="shrink-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <p className="mb-4 text-[12px] leading-relaxed text-muted-foreground">
                                                {item.details}
                                            </p>
                                        </CardContent>
                                    </Card>

                                )) : (
                                    <div className="mx-auto gap-3 flex flex-col justify-center items-center text-gray-400 text-xl h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                            </div>
                        </div>
                    )}

                    {activeTab === 7 && (
                        <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Produtos de Batéria</h2>
                            <div className="lg:ml-10 sm:ml-0  flex-wrap justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
                                {filterBatteryProducts.length > 0 ? filterBatteryProducts.map((item: ProductType) => (
                                    <Card key={item.id}  className="group overflow-hidden border-border  transition-all hover:shadow-lg">
                                        <div className="relative overflow-hidden  h-48 w-full flex items-center justify-center">
                                            <Image
                                                alt={item.alt}
                                                src={item.srcImage}
                                                width={110}
                                                height={110}
                                                className="h-full w-[180px]  flex justify-between text-center mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <CardContent className="p-6">
                                            <div className="mb-2 flex items-start justify-between gap-2">
                                                <h3 className="font-serif text-[12px] leading-tight text-foreground">
                                                    {item.nameProduct}
                                                </h3>
                                                <Button
                                                    size="icon"
                                                    variant="outline"
                                                    onClick={() => handleAddToCart(item)}
                                                    className="shrink-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <p className="mb-4 text-[12px] leading-relaxed text-muted-foreground">
                                                {item.details}
                                            </p>
                                        </CardContent>
                                    </Card>

                                )) : (
                                    <div className="mx-auto gap-3 flex flex-col justify-center items-center text-gray-400 text-xl h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                            
                            </div>
                        </div>

                    )}

                    {activeTab === 8 && (
                        <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Produtos de Cola e Resistente</h2>
                            <div className="lg:ml-10 sm:ml-0  flex-wrap justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
                                   {filterResistanceProducts.length > 0 ? filterResistanceProducts.map((item: ProductType) => (
                                       <Card key={item.id}  className="group overflow-hidden border-border  transition-all hover:shadow-lg">
                                           <div className="relative overflow-hidden  h-48 w-full flex items-center justify-center">
                                               <Image
                                                   alt={item.alt}
                                                   src={item.srcImage}
                                                   width={110}
                                                   height={110}
                                                   className="h-full w-[180px]  flex justify-between text-center mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                               />
                                           </div>
                                           <CardContent className="p-6">
                                               <div className="mb-2 flex items-start justify-between gap-2">
                                                   <h3 className="font-serif text-[12px] leading-tight text-foreground">
                                                       {item.nameProduct}
                                                   </h3>
                                                   <Button
                                                       size="icon"
                                                       variant="outline"
                                                       onClick={() => handleAddToCart(item)}
                                                       className="shrink-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                                                   >
                                                       <Plus className="h-4 w-4" />
                                                   </Button>
                                               </div>
                                               <p className="mb-4 text-[12px] leading-relaxed text-muted-foreground">
                                                   {item.details}
                                               </p>
                                           </CardContent>
                                       </Card>


                                )) : (
                                    <div className="mx-auto gap-3 flex flex-col justify-center items-center text-gray-400 text-xl h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                            
                            </div>
                        </div>
                    )}

                    {activeTab === 9 && (
                        <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Produtos de Aditivo de Limpeza</h2>
                            <div className="lg:ml-10 sm:ml-0  flex-wrap justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
                              {filterCleaningProducts.length > 0 ? filterCleaningProducts.map((item: ProductType) => (
                                  <Card key={item.id}  className="group overflow-hidden border-border  transition-all hover:shadow-lg">
                                      <div className="relative overflow-hidden  h-48 w-full flex items-center justify-center">
                                          <Image
                                              alt={item.alt}
                                              src={item.srcImage}
                                              width={110}
                                              height={110}
                                              className="h-full w-[180px]  flex justify-between text-center mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                          />
                                      </div>
                                      <CardContent className="p-6">
                                          <div className="mb-2 flex items-start justify-between gap-2">
                                              <h3 className="font-serif text-[12px] leading-tight text-foreground">
                                                  {item.nameProduct}
                                              </h3>
                                              <Button
                                                  size="icon"
                                                  variant="outline"
                                                  onClick={() => handleAddToCart(item)}
                                                  className="shrink-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                                              >
                                                  <Plus className="h-4 w-4" />
                                              </Button>
                                          </div>
                                          <p className="mb-4 text-[12px] leading-relaxed text-muted-foreground">
                                              {item.details}
                                          </p>
                                      </CardContent>
                                  </Card>

                                )) : (
                                    <div className="mx-auto gap-3 flex flex-col justify-center items-center text-gray-400 text-xl h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                             
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
