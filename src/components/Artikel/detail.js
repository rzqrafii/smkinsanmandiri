import React from 'react'
import ImageArtikelMOPDB from '../../images/artikel-1.png'

const detail = () => {
    return (
        <section class="detail-artikel">
            <div class="container">
                <div class="row row-artikel-detail">
                    <div class="col-lg-8 col-sm-12">
                        <div class="wrapper-detail-artikel">
                            <img class="img-artikel-detail" src={ImageArtikelMOPDB} alt="Persiapan MOPDB Online SMK Insan Mandiri" />
                            <h6 class="tanggal-artikel-detail">23/10/2021</h6>
                            <h1 class="judul-artikel-detail">Persiapan MOPDB Online</h1>
                            <p class="deskripsi-artikel-detail">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. </p>
                            <h6 class="created-by-artikel-detail">Dibuat oleh: Administrator</h6>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-12">
                        <div class="wrapper-artikel-lainnya">
                            <h5 class="title-artikel-lainnya">Artikel Lainnya</h5>
                            <hr/>
                            <div class="artikel-lainnya">
                                <a href="#" class="link-artikel-lainnya"><h6 class="judul-artikel-detail-lainnya">Persiapan MOPDB Online</h6></a>
                                <a href="#" class="link-artikel-lainnya"><h6 class="judul-artikel-detail-lainnya">SELAMAT HARI RAYA IDUL FITRI 1441 H</h6></a>
                                <a href="#" class="link-artikel-lainnya"><h6 class="judul-artikel-detail-lainnya">Hardiknas 2020</h6></a>
                                <a href="#" class="link-artikel-lainnya"><h6 class="judul-artikel-detail-lainnya">Home Learning</h6></a>
                                <a href="#" class="link-artikel-lainnya"><h6 class="judul-artikel-detail-lainnya">JADWAL PTS KELAS X 2020-2021</h6></a>
                                <a href="#" class="link-artikel-lainnya"><h6 class="judul-artikel-detail-lainnya">JADWAL PTS KELAS XI 2020-2021</h6></a>
                                <a href="#" class="link-artikel-lainnya"><h6 class="judul-artikel-detail-lainnya">JADWAL PTS KELAS XII 2020/2021</h6></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default detail
