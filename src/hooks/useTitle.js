import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - CS for knowing & doing`;
    }, [title])
};
export default useTitle;