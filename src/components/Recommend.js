import React, {Component} from 'react';
import "antd/dist/antd.css";
import { Col, Row, Form, Radio } from "antd";

class RecommendFrom extends Component {
    render() {
        const onChange = e => {
            console.log(`radio checked:${e.target.value}`);
        };

        const radioStyle = {
            display: "block",
            height: "30px",
            lineHeight: "30px"
        };

        const deliveryOptions = [
            { style: radioStyle, content: "Option 1: Time: hours,  Fee: $  , Carrier: drone/robot ", value: 1 },
            { style: radioStyle, content: "Option 2: Time: hours,  Fee: $  , Carrier: drone/robot ", value: 2 },
            { style: radioStyle, content: "Option 3: Time: hours,  Fee: $  , Carrier: drone/robot ", value: 3 }
        ];

        return (
            <Form
                name="PackageInfoForm"
                initialvalues={{
              remember: true
            }}
            >
                <Row gutter={10}>
                    <Col span={30}>
                        <Form.Item
                            label="Delivery time"
                            name="Delivery time"
                            rules={[
                    {
                      required: true,
                      message: "Delivery time"
                    }
                  ]}
                        >
                            <Radio.Group
                                name="Delivery time"
                                onChange={onChange}
                                defaultValue="a"
                            >
                                <Radio.Button value="a">1hr</Radio.Button>
                                <Radio.Button value="b">5hrs</Radio.Button>
                                <Radio.Button value="c">8hrs</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col span={30}>
                        <Form.Item
                            label="Delivery options"
                            name="Delivery options"
                            rules={[
                    {
                      required: true,
                      message: "Delivery options"
                    }
                  ]}
                        >
                            <Radio.Group
                                onChange={this.onChange}
                                defaultValue={1}
                            >
                                {deliveryOptions.map(option => (
                                    <Radio style={option.style} value={option.value} key = {option.value}>
                                        {option.content}
                                    </Radio>
                                ))}
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        );
    }
}


const Recommend = Form.create({ name: 'recommend' })(RecommendFrom);

export default Recommend;


// class Recommend extends Component {
//     RecommandInfoForm = () => {
//         const onChange = e => {
//           console.log(`radio checked:${e.target.value}`);
//         };
//
//         const radioStyle = {
//           display: "block",
//           height: "30px",
//           lineHeight: "30px"
//         };
//
//         const deliveryOptions = [
//           { style: radioStyle, content: "Option1: Time, Fee, Carrier", value: 1 },
//           { style: radioStyle, content: "Option2: Time, Fee, Carrier", value: 2 },
//           { style: radioStyle, content: "Option3: Time, Fee, Carrier", value: 3 }
//         ];
//         return (
//           <Form
//             name="PackageInfoForm"
//             initialValues={{
//               remember: true
//             }}
//           >
//             <Row gutter={10}>
//               <Col span={30}>
//                 <Form.Item
//                   label="Delivery time"
//                   name="Delivery time"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Delivery time"
//                     }
//                   ]}
//                 >
//                   <Radio.Group
//                     name="Delivery time"
//                     onChange={onChange}
//                     defaultValue="a"
//                   >
//                     <Radio.Button value="a">1hr</Radio.Button>
//                     <Radio.Button value="b">5hrs</Radio.Button>
//                     <Radio.Button value="c">1day</Radio.Button>
//                     <Radio.Button value="d">5days</Radio.Button>
//                   </Radio.Group>
//                 </Form.Item>
//               </Col>
//             </Row>
//             <Row gutter={10}>
//               <Col span={30}>
//                 <Form.Item
//                   label="Delivery options"
//                   name="Delivery options"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Delivery options"
//                     }
//                   ]}
//                 >
//                   <Radio.Group onChange={this.onChange} defaultValue={1}>
//                     {deliveryOptions.map(option => (
//                       <Radio style={option.style} value={option.value}>
//                         {option.content}
//                       </Radio>
//                     ))}
//                   </Radio.Group>
//                 </Form.Item>
//               </Col>
//             </Row>
//           </Form>
//         );
//       };
//
//     render() {
//         return (
//             <div>
//                 <this.RecommandInfoForm/>
//             </div>
//         );
//     }
// }
//
//
// export default Recommend;
