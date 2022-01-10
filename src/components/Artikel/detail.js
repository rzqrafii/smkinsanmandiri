import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { useParams, NavLink, useNavigate } from 'react-router-dom'

const Detail = (props) => {
  const { id } = useParams()
  let navigate = useNavigate()
  let mount = useRef()

  const [detailArtikel, setDetailArtikel] = useState({})
  const [topArtikel, setTopArtikel] = useState([])

  useEffect(() => {
    const fetchDet = async () => {
      var config = {
        method: 'get',
        url: `http://localhost:3000/api/v1/artikel/detil/${id}`,
        headers: {},
      }
      const res = await axios(config)

      if (res.status === 200) {
        setDetailArtikel(res.data.data)
      }
    }

    const fetchTop = async () => {
      var config = {
        method: 'get',
        url: `http://localhost:3000/api/v1/artikel/highlight`,
        headers: {},
      }
      const res = await axios(config)

      if (res.status === 201) {
        setTopArtikel(res.data.data)
      }
    }

    fetchDet()
    fetchTop()
  }, [id])

  return (
    <>
      <section class='detail-artikel'>
        <div class='container' key={detailArtikel.judul}>
          <div class='row row-artikel-detail'>
            <div class='col-lg-8 col-sm-12'>
              <div class='wrapper-detail-artikel'>
                <img
                  class='img-artikel-detail'
                  src={detailArtikel.gambar}
                  alt='Persiapan MOPDB Online SMK Insan Mandiri'
                />
                <h6 class='tanggal-artikel-detail'>
                  {detailArtikel.createdAt}
                </h6>
                <h1 class='judul-artikel-detail'>{detailArtikel.judul}</h1>
                <p class='deskripsi-artikel-detail'>
                  {detailArtikel.deskripsi}
                </p>
                <h6 class='created-by-artikel-detail'>
                  Dibuat oleh: {detailArtikel.createdBy}
                </h6>
              </div>
            </div>
            <div class='col-lg-3 col-sm-12'>
              <div class='wrapper-artikel-lainnya'>
                <h5 class='title-artikel-lainnya'>Artikel Lainnya</h5>
                <hr />
                <div class='artikel-lainnya'>
                  {topArtikel.map((item, index) => (
                    <div key={index.toString()}>
                      <NavLink to={`/DetailArtikel/${item.id}`}>
                        <h6 class='judul-artikel-detail-lainnya'>
                          {item.judul}
                        </h6>
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Detail
