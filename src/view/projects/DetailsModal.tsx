import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import Images from '../../data/image-route.json';

import ParagraphProps from '../../model/ParagraphProps';
import WorkItem from '../../model/WorkItem';

export default function DetailsModal({...itemInView}: WorkItem) {

    const date = new Date(itemInView.date);

    return (
        <div className="modal fade" id="projectModal" tabIndex={-1} aria-labelledby="projectModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-body">

                        <Carousel {...itemInView}/>

                        <div>
                            <div className='w-100 d-flex flex-row justify-content-between align-items-center'>
                                <h3 id='project-title'>{itemInView.name}</h3>
                                <small id='project-date' className='opacity-75'>{`Last Updated: ${date.getFullYear()}`}</small>
                            </div>
                            <small id='project-platforms' className='opacity-75'>{itemInView.platforms.join(', ')}</small>
                        </div>

                        <hr />

                        <Paragraph title='Description' body={itemInView.description}/>

                        <Paragraph title='Contribution' body={itemInView.contribution}/>

                    </div>
                    <div className="modal-footer">
                        <a href={itemInView.github} target='_blank' rel="noreferrer" id='project-link' className={`btn btn-primary ${!itemInView.github ? "d-none" : ""}`}>View</a>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Paragraph({title, body}: ParagraphProps) {
    if(!body) { return null; }

    return (
        <div>
            <h5>{title}</h5>
            <p id={`project-${title.toLowerCase()}`}>{body}</p>
        </div>
    )
}

function Carousel({...itemInView}: WorkItem) {
    const imageFileConfig = Images.find(i => i.folder === itemInView.imagesPath);
    const images = imageFileConfig?.images ?? [];
    if(!imageFileConfig || !images.length) { return null; }

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {
                    images.map((image) => {
                        return (
                            <div key={uuidv4()} className={`carousel-item ${images[0] === image ? "active" : "" }`}>
                                <img src={`asset/${itemInView.imagesPath}/${image}`} className="d-block" alt={image} />
                            </div>
                        )
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

