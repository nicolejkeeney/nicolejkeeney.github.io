import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Publications.scss';
import { publications, Publication } from '../data/publicationsData';

function Publications() {
  return (
    <div className="publications-container" id="publications">
      <div className="publications-content">
        <h1>Publications</h1>
        <div className="publications-list">
          {publications.map((pub: Publication, index: number) => (
            <div key={index} className="publication-item">
              <div className="publication-icon">
                <FontAwesomeIcon icon={faFileAlt} />
              </div>
              <div className="publication-details">
                <div className="publication-authors">{pub.authors}</div>
                <div className="publication-year">({pub.year})</div>
                <h3 className="publication-title">
                  <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                </h3>
                <div className="publication-journal">
                  <em>{pub.journal}</em>
                </div>
                <div className="publication-doi">
                  <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer">
                    doi:{pub.doi}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Publications;
