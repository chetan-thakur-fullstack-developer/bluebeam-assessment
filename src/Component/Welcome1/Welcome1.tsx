import * as Constant from '../../Constant/Constant'

/**
 * Welcome1 page component as per story1.
 */
function Welcome1() {
    return (
        <div>
            <h1 className="h1"><a href={Constant.HOMEPAGE_URL}>{Constant.WELCOME}</a></h1>

            <button name="Logout" type="submit" className="btn btnCyn">
                <a href={Constant.BLUEBEAM_URL}>{Constant.LOGOUT}</a>
            </button>
        </div>
    );
}

export default Welcome1;
