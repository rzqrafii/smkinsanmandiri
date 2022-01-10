import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

const Artikel = () => {
  const [data, setData] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [perPage] = useState(6)
  const [cp, setCp] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/api/v1/artikel')

      const slice = result.data.data.slice(itemOffset, itemOffset + perPage)
      setData(slice)

      setPageCount(Math.ceil(result.data.data.length / perPage))
    }

    fetchData()
  }, [data, itemOffset, perPage])

  const handlePageClick = (event) => {
    const selectedPage = event.selected
    const offset = selectedPage * perPage

    setCp(selectedPage)
    setItemOffset(offset)
  }

  return (
    <section class='section-artikel'>
      <div class='row row-all-artikel'>
        <div class='col-12 title-all-artikel'>
          <h1>Pilihan Artikel</h1>
        </div>
        <div class='wrapper-artikel'>
          {data.map((val) => (
            <div class='card-artikel'>
              <div class='picture-artikel'>
                <img
                  class='img-artikel'
                  src={val.gambar}
                  alt='Persiapan MOPDB Online SMK Insan Mandiri'
                />
              </div>
              <div class='header-artikel'>
                <h5>{val.judul}</h5>
              </div>
              <div class='body-artikel'>
                <h6>{val.deskripsi}</h6>
              </div>
              <div class='link-selengkapnya'>
                <h6>
                  <NavLink to={`/DetailArtikel/${val.id}`}>
                    Selengkapnya
                  </NavLink>
                </h6>
              </div>
              <div class='footer-artikel'>
                <div class='footer-artikel-tanggal'>
                  <h6>{val.createdAt}</h6>
                </div>
                <div class='footer-artikel-postedby'>
                  <h6>{val.createdBy}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class='row row-pagination'>
        <nav aria-label='Page navigation example'>
          <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </nav>
      </div>
    </section>
  )
}

export default Artikel
