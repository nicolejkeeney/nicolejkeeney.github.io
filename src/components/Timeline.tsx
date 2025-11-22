import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';
import { timelineData, ExperienceCategory, TimelineItemData, Position, TimelineLink } from '../data/timelineData';

type FilterOption = 'All' | ExperienceCategory;

const CATEGORY_TO_COLOR: Record<FilterOption, string> = {
  All: '#9A275A',
  [ExperienceCategory.Industry]: '#2E7DB8',
  [ExperienceCategory.Academia]: '#16A085',
};

const LINK_TYPE_TO_EMOJI = {
  project: '🔗',
  publication: '📄',
  github: '💻',
  documentation: '📚',
  other: '🌐',
};

const LINK_TYPE_TO_COLOR = {
  project: '#2E7DB8',
  publication: '#E36588',
  github: '#103900',
  documentation: '#9A275A',
  other: '#2C9670',
};

function Timeline() {
  const [filter, setFilter] = useState<FilterOption>('All');

  const filteredData = filter === 'All'
    ? timelineData
    : timelineData.filter(item => item.category === filter);

  // Helper function to render description as either text or bullet points
  const renderDescription = (description: string | string[]) => {
    if (Array.isArray(description)) {
      return (
        <ul className="position-description-list">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="position-description">{description}</p>;
  };

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        {/* Filter buttons */}
        <div className="filter-controls">
          {Object.entries(CATEGORY_TO_COLOR).map(([category, color]) => (
            <button
              key={category}
              type="button"
              className={`filter-button ${filter === category ? 'active' : ''}`}
              style={{
                borderColor: color,
                color: filter === category ? '#fff' : color,
                backgroundColor: filter === category ? color : 'transparent',
              }}
              onClick={() => setFilter(category as FilterOption)}
            >
              {category}
            </button>
          ))}
        </div>

        <VerticalTimeline>
          {filteredData.map((item: TimelineItemData, index: number) => (
            <VerticalTimelineElement
              key={`${filter}-${index}`}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date={item.dateRange}
              iconStyle={{
                background: CATEGORY_TO_COLOR[item.category],
                color: 'rgb(39, 40, 34)'
              }}
              icon={<FontAwesomeIcon icon={item.icon} />}
            >
              <h3 className="vertical-timeline-element-title">{item.organization}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>

              {/* Multiple positions within the organization */}
              <div className="positions-container">
                {item.sharedDescription ? (
                  /* Shared description layout - titles stacked, then description, then links */
                  <>
                    {/* Stack all position titles/dates */}
                    <div className="position-titles-stack">
                      {item.positions.map((position: Position, posIndex: number) => (
                        <div key={posIndex} className="position-header-stacked">
                          <strong className="position-title">{position.title}</strong>
                          <span className="position-date">{position.date}</span>
                        </div>
                      ))}
                    </div>

                    {/* Shared description */}
                    {renderDescription(item.sharedDescription)}

                    {/* Shared links */}
                    {item.sharedLinks && item.sharedLinks.length > 0 && (
                      <div className="timeline-links">
                        {item.sharedLinks.map((link: TimelineLink, linkIndex: number) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="timeline-link-badge"
                            style={{
                              borderColor: LINK_TYPE_TO_COLOR[link.type],
                              color: LINK_TYPE_TO_COLOR[link.type],
                            }}
                          >
                            {link.type === 'github' ? (
                              <FontAwesomeIcon icon={faGithub} className="link-icon-emoji" />
                            ) : (
                              <span className="link-icon-emoji">{LINK_TYPE_TO_EMOJI[link.type]}</span>
                            )}
                            <span>{link.title}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  /* Per-position layout */
                  item.positions.map((position: Position, posIndex: number) => (
                    <div key={posIndex} className={`position-entry ${posIndex > 0 ? 'mt-3' : ''}`}>
                      <div className="position-header">
                        <strong className="position-title">{position.title}</strong>
                        <span className="position-date">{position.date}</span>
                      </div>
                      {renderDescription(position.description)}

                      {/* Links section for each position */}
                      {position.links && position.links.length > 0 && (
                        <div className="timeline-links">
                          {position.links.map((link: TimelineLink, linkIndex: number) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="timeline-link-badge"
                              style={{
                                borderColor: LINK_TYPE_TO_COLOR[link.type],
                                color: LINK_TYPE_TO_COLOR[link.type],
                              }}
                            >
                              {link.type === 'github' ? (
                                <FontAwesomeIcon icon={faGithub} className="link-icon-emoji" />
                              ) : (
                                <span className="link-icon-emoji">{LINK_TYPE_TO_EMOJI[link.type]}</span>
                              )}
                              <span>{link.title}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
