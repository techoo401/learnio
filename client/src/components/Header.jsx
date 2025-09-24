function Header() {
    return (
        <header className="container flex justify-between mx-auto py-4 px-4 sm:px-6 md:px-8 lg:px-24 mt-4">
            <h1 className="font-logo text-4xl font-bold text-blue-600">LearnIo</h1>

            <div className="flex gap-6 font-semibold items-center justify-center">
                <button className="border-2 px-6 py-2 rounded-md border-blue-600 text-blue-600 w-32">Sign Up</button>
                <button className="px-6 py-2 rounded-md bg-blue-600 text-white w-32">Login</button>
            </div>
        </header>
    )
}

export default Header