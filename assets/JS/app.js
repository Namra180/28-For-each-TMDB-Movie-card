let cl = console.log;
 
const cardInfo = document.getElementById('cardInfo');
cl(cardInfo);

let ratingInfo = (rating) => {
    if (rating >= 7) {
        return "bg-success";
    } 
    else if (rating >= 5) {
        return "bg-warning text-dark";
    } 
    else {
        return "bg-danger";
    }
};
let result = '';

movieArr.forEach((params) =>{
      result += ` <div calss="col-sm-4 mt-3">
                    <div class="card">
                        <figure class="movieCard m-0">
                        <img src="https://media.themoviedb.org/t/p/w500/${params.backdrop_path || params.poster_path}"
                            alt="${params.title || params.original_title}" 
                            title="${params.title || params.original_title}"
                            class="img-fluid">
                        <figcaption>
                            <div class="titleInfo">
                                <div class="row">
                                    <div class="col-9">
                                        <h2>${params.title || params.original_title}</h2>
                                    </div>
                                    <div class="col-2">
                                        <h3>
                                            <span class="badge ${ratingInfo(params.vote_average)}">${params.vote_average}</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="overview">
                                <h5>${params.title || params.original_title}</h5>
                                <p>${params.overview}</p>
                            </div>
                        </figcaption>
                        </figure>
                    </div>
                </div>`
});

cardInfo.innerHTML = result;