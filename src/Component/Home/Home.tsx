/**
 * Home page component will load at the time of App load.
 */

function Home() {
    return (
        <div>
            <h1>Bluebeam Assessment! 2</h1>

            <button name="Story 1" type="submit" className="btn"><a href="/bluebeam-assessment/#/story1/">Story 1</a></button>

            <button name="Story 2" type="submit" className="btn"><a href="/bluebeam-assessment/#/story2/">Story 2</a></button>
        </div>
    )
}

export default Home