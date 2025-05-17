const reportwebvitals = onPerfEntery => {
    if (onPerfEntery && onPerfEntery instanceof Function) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB}) => {
            getCLS(onPerfEntery)
            getFCP(onPerfEntery)
            getFID(onPerfEntery)
            getLCP(onPerfEntery)
            getTTFB(onPerfEntery)
        })
    }
}   

export default reportwebvitals