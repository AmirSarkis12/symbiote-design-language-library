import * as React from 'react'

interface Props {
    accordionContent: {title: string, content: string}[]
}

export class Accordion extends React.Component<Props> {
    render() {
        return (
            <div className="accordion">
                {this.props.accordionContent.map((item, index) => (
                    <div key={index} className="tab">
                        <input type="checkbox" id={`accordion-${index}`}></input>
                        <label className="tab-label" htmlFor={`accordion-${index}`}>{item.title}</label>
                    <div className="tab-content">
                            <p>{item.content}</p>
                    </div>
                </div>
                ))}
            </div>
        )
    }
}
