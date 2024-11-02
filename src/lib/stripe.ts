/*import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-10-28.acacia',
    appInfo: {
        name: 'DR2',
    },
});

// Exemplo de uso em uma função do Next.js
export const getServerSideProps = async () => {
    try {
        const { data } = await stripe.products.list();
        console.log(data)
        return {
            props: {
                products: data,
            },
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        return {
            props: {
                products: [],
            },
        };
    }
};
*/