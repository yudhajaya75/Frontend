import { useEffect, useState } from 'react'

function useCardPelatihan() {
    const [content, setContent] = useState<any>()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products?populate[0]=image&populate[1]=populate[2]=*&filters[category][$eq]=Pelatihan`)
            .then((response) => response.json())
            .then((data) => {
                const dataz = data.data;
                let dataPushed = [] as any;
                dataz.forEach((data: any, index: any) => {
                    dataPushed.push(Object.assign(data, { price: "" }))
                })

                fetch(`${process.env.REACT_APP_API_URL}/products?populate[]=product_variants.features&filters[category][$eq]=Pelatihan`)
                    .then((response) => response.json())
                    .then((data) => {
                        let dataInputted = [] as any;
                        const dataMapped = data.data.map((d: any, i: number) => {
                            return d.attributes.product_variants.data.map((e: any) => {
                                return e.attributes.price
                            })
                        });
                        dataMapped.forEach((d: any) => {
                            dataInputted.push(Math.min(...d));
                        })
                        console.log(dataMapped, dataInputted)
                        dataPushed.map((dati: any, i: number) => {
                            dati.price = dataInputted[i]
                        })
                        setContent(dataPushed);
                        setTimeout(() => {
                            setLoading(false);
                        }, 4000);
                    })
            })
    }, [])

    return {
        content,
        loading
    }
}

export default useCardPelatihan