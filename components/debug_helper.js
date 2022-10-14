

export default function debug_(props) {
    return (
        <>
            {(process && process.env.NODE_ENV === 'development') ? console.log(props) : <></>}
        </>
    )
}