export default function Cardmenu(){
    return(
<div className="container">
<button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">click</button>
<div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        <div class="card">
        <div class="form">

{/*     
        <div className="card">
            <div className="form"> */}

                <form>
                    <input for="text" placeholder="First name" id="ab"></input> <br></br>
                    <input for="text" placeholder="last name"  id="bc"></input><br></br>
                    <input for="email" placeholder="username" id="cd"></input><br></br>
                    <input for="password" placeholder="password" id="de"></input>
                    <button type="submit" id="ef">login</button>

                </form>
                <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                {/* </div>
                </div> */}

            </div>

        </div>


    )
}