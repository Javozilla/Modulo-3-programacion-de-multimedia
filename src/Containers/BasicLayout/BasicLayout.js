const BasicLayout =({children}) => {
    return(
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )

}
export default BasicLayout