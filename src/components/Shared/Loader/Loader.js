import { ThreeCircles } from "react-loader-spinner"

export function Loader() {
    return (
        <ThreeCircles 
        visible={true}
        height="100"
        width="100"
        color="#121212"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass="uk-position-center"
        />
    )
}