import * as Constant from '../../Constant/Constant'

/**
 * Home page component will load at the time of App load.
 */

function Home() {
    return (
        <div>
            <h1>{Constant.BLUEBEAM_ASSESSMENT}</h1>

            <button name="Story 1" type="submit" className="btn"><a href={Constant.STORY1_URL}>{Constant.STORY1}</a></button>

            <button name="Story 2" type="submit" className="btn"><a href={Constant.STORY2_URL}>{Constant.STORY2}</a></button>
        </div>
    )
}

export default Home