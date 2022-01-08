import React, {useEffect, useState} from 'react'
import ImageArtikelMOPDB from '../../images/artikel-1.png'
import DetailArtikel from '../../pages/artikelDetail'
import axios from 'axios'

const Artikel = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            setData([])
            const result = await axios(
                './data-article.json',
            );
            
            result.data.data.map((item, index)=>
            {
                if(index < 6){
                    setData(val=>[...val,item])
                }
            })
        };

        fetchData();
    }, []);
    return (
        <section class="section-artikel">
            <div class="row row-all-artikel">
                <div class="col-12 title-all-artikel">
                    <h1>Pilihan Artikel</h1>
                </div>
                <div class="wrapper-artikel">
                    {data.map( val =>(
                        <div class="card-artikel">
                            <div class="picture-artikel">
                                <img class="img-artikel" src={ImageArtikelMOPDB} alt="Persiapan MOPDB Online SMK Insan Mandiri" />
                            </div>
                            <div class="header-artikel">
                                <h5>{val.judul}</h5>
                            </div>
                            <div class="body-artikel">
                                <h6>{val.deskripsi}</h6>
                            </div>
                            <div class="link-selengkapnya">
                                <h6><a href={"DetailArtikel"}>Selengkapnya</a></h6> 
                            </div>
                            <div class="footer-artikel">
                                <div class="footer-artikel-tanggal"><h6>{val.createdAt}</h6></div>
                                <div class="footer-artikel-postedby"><h6>{val.createdBy}</h6></div>
                            </div>
                        </div>
                    ) )}
                    
                </div>
            </div>
            <div class="row row-pagination">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Artikel
