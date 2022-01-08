import React, {useEffect, useState} from 'react'
import ImageHeroes from '../../images/heroes-img-2.png'
import ImageJurusanTKJ from '../../images/jurusan_2.png'
import ImageJurusanMM from '../../images/jurusan_1.png'
import ImageJurusanAP from '../../images/jurusan_3.png'
import ImageArtikelMOPDB from '../../images/artikel-1.png'
import ImageArtikelPPDB from '../../images/artikel-2.png'
import Artikel from '../../pages/artikel'
import axios from 'axios'

const Content = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            setData([])
            const result = await axios(
                './data-article.json',
            );
            
            result.data.data.map((item, index)=>
            {
                if(index < 3){
                    setData(val=>[...val,item])
                }
            })
        };

        fetchData();
    }, []);
    return (
        <>
            <div class="container container-heroes">
                <div class="row row-heroes">
                    <div class="col heroes-copy">
                        <h6 class="text-title__motto">SMK Insan Mandiri</h6>
                        <h1 class="text-title__heading">Sekolah swasta dengan akreditasi B di Jakarta</h1>
                        <p class="text-title__description">SMK Insan Mandiri Jakarta menyediakan berbagai fasilitas penunjang bagi anak didiknya. Terdapat guru-guru dengan kualitas terbaik yang kompeten di - bidangnya, kegiatan penunjang pembelajaran seperti ekstrakurikuler (eskul), organisasi siswa, komunitas belajar, tim olahraga, dan perpustakaan sehingga siswa dapat belajar secara maksimal.</p>
                        <span class="btn-container">
                            <button type="button" class="btn btn-primary__jurusan"><a class="btn-artikel" href={"Artikel"}>Lihat Artikel</a></button>
                            {/* <button type="button" class="btn btn-secondary__profil">Lihat Profil</button> */}
                        </span>
                    </div>
                    <div class="col heroes-img-wrapper"><img class="heroes-img" src={ImageHeroes} alt="SMK Insan Mandiri"/></div>
                </div>
                <div class="row row-statistik">
                    <div class="col-12 wrapper-statistik">
                        <div class="col-3 column-statistik">
                            <h2>13</h2>
                            <br/>
                            <h6>Guru</h6>
                        </div>
                        <div class="col-3 column-statistik">
                            <h2>48</h2>
                            <br/>
                            <h6>Siswa</h6>
                        </div>
                        <div class="col-3 column-statistik">
                            <h2>5</h2>
                            <br/>
                            <h6>Ruang Kelas</h6>
                        </div>
                        <div class="col-3 column-statistik">
                            <h2>1</h2>
                            <br/>
                            <h6>Laboratorium</h6>
                        </div>
                    </div>
                </div>
                <div class="row row-jurusan">
                    <div class="col-12 col-jurusan-title">
                        <h4 class="text-title">Jurusan yang ada di SMK Insan Mandiri</h4>
                    </div>
                    <div class="col-12 col-jurusan-img">
                        <div class="wrapper wrapper-jurusan">
                            <div class="col jurusan-img">
                                <img src={ImageJurusanMM} alt="Multimedia"/>
                            </div>
                            <div class="col jurusan-img">
                                <img src={ImageJurusanTKJ} alt="Teknik Komputer Jaringan"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-artikel">
                    <div class="col-12">
                        <h4 class="text-title">Tulisan Terbaru</h4>
                    </div>
                    <div class="col-12">
                        <div class="wrapper wrapper-card-artikel">
                            {data.map( val =>(
                                <div class="card-artikel">
                                    <div class="picture-artikel">
                                        <img class="img-artikel" src={ImageArtikelMOPDB} alt="Persiapan MOPDB Online SMK Insan Mandiri" />
                                    </div>
                                    <div class="header-artikel">
                                        <h5>{val.judul}</h5>
                                    </div>
                                    <div class="body-artikel">
                                        <h6>{val.deskripsi} <a href="#"> <br/> Selengkapnya</a> </h6>
                                    </div>
                                    <div class="footer-artikel">
                                        <div class="footer-artikel-tanggal"><h6>{val.createdAt}</h6></div>
                                        <div class="footer-artikel-postedby"><h6>{val.createdBy}</h6></div>
                                    </div>
                                </div>
                            ) )}
                            {/* <div class="card-artikel">
                                <div class="picture-artikel">
                                    <img class="img-artikel" src={ImageArtikelPPDB} alt="Persiapan MOPDB Online SMK Insan Mandiri" />
                                </div>
                                <div class="header-artikel">
                                    <h5>Persiapan MOPDB Online</h5>
                                </div>
                                <div class="body-artikel">
                                    <h6>Persiapan Masa Orientasi Peserta Didik Baru, SMK Insan Mandiri akan dilaksanakan pada : Hari Sabtu, 10 Juli 2021. <a href="#">Selengkapnya</a> </h6>
                                </div>
                                <div class="footer-artikel">
                                    <div class="footer-artikel-tanggal"><h6>07/05/2021</h6></div>
                                    <div class="footer-artikel-postedby"><h6>Administrator</h6></div>
                                </div>
                            </div>
                            <div class="card-artikel">
                                <div class="picture-artikel">
                                    <img class="img-artikel" src={ImageArtikelMOPDB} alt="Persiapan MOPDB Online SMK Insan Mandiri" />
                                </div>
                                <div class="header-artikel">
                                    <h5>Persiapan MOPDB Online</h5>
                                </div>
                                <div class="body-artikel">
                                    <h6>Persiapan Masa Orientasi Peserta Didik Baru, SMK Insan Mandiri akan dilaksanakan pada : Hari Sabtu, 10 Juli 2021. <a href="#">Selengkapnya</a> </h6>
                                </div>
                                <div class="footer-artikel">
                                    <div class="footer-artikel-tanggal"><h6>07/05/2021</h6></div>
                                    <div class="footer-artikel-postedby"><h6>Administrator</h6></div>
                                </div>
                            </div> */}
                        </div>
                        <div class="more-artikel">
                            <a class="more-artikel-text" href={"Artikel"}>Lebih Banyak Artikel</a>
                        </div>
                    </div>
                </div>
                <div class="row row-video">
                    <div class="col-12">
                        <h4 class="text-title">Video Terbaru</h4>
                    </div>
                    <div class="col-12">
                        <div class="wrapper wrapper-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/pqZDNQvOc9U" title="SMK Insan Mandiri" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/BpmvpEMidjo" title="SMK Insan Mandiri" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/AQtjA9jQw0A" title="SMK Insan Mandiri" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
