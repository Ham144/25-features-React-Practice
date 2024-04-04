import { useEffect, useState } from "react";
// type Props = {
// 	url: string;
// 	options?: object;
// };
export default function useFetch(url, options = {}) {
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    async function fetchingData() {
        try {
            setProcessing(true);
            const response = await fetch(url, options);
            const datas = await response.json();
            if (!datas) {
                console.log("failed to fetcing");
            }
            else {
                setProcessing(false);
                setData(datas);
            }
        }
        catch (error) {
            new Error(error);
            console.log(error);
            setProcessing(false);
            setError[error];
        }
    }
    useEffect(() => {
        fetchingData();
    }, [url]);
    return { processing, data, error }; //REMEMBER!!, return within curlybrace not array haha, ingat return pake objek bukan array haduh ini aja salah
}
