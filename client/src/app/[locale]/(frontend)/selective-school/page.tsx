'use client';
import { Col, Collapse, Row } from 'antd';
const { Panel } = Collapse;
import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { getFaq } from "@/lib/frontendApi";
import Link from 'next/link';
import TestimonialSlider from '@/components/frontend/TestimonialSlider';

interface getFaqs {
    questions: string;
    answer: string;
}

export default function Page() {
    const [data, setData] = useState<getFaqs[]>([]);

    const faqHandler = async () => {
        const faqs = await getFaq();
        if (faqs) {
            setData(faqs.data);
        }
    };

    useEffect(() => {
        faqHandler();
    }, []);

    // const styleAnswerContent = (content: string) => {
    //     return content.replace(
    //         /<img [^>]*>/g,
    //         (imgTag) => {
    //             // Add inline styles to the image tag
    //             return imgTag.replace(
    //                 /<img/,
    //                 '<img style="width: 200px !important; height: 200px !important; object-fit: cover;"'
    //             );
    //         }
    //     );
    // };
    return (
        <>
            <>
                <section className="selective-entry bg-linear banner-part-pages">
                    <div className="container">
                        <h2 className="text-center title-secondary color-light fw-medium xs-font-sm ">
                            Selective Entry Test (Victoria)
                        </h2>
                    </div>
                </section>

                <section className="pt-2 pb-5">
                    <Row
                        justify="center"
                        style={{
                            marginTop: "20px",
                            width: "100%",

                            padding: "2rem",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",

                                textAlign: "center",
                            }}
                        >
                            <h1 style={{ marginBottom: '2rem', color: '#6B5CB6' }}>
                                TOP QUESTIONS ABOUT SELECTIVE SCHOOL EXAM
                            </h1>

                            <Col span={24}>
                                <Collapse
                                    accordion
                                    className="faqPart"
                                    style={{ width: "100%" }}
                                    expandIcon={({ isActive }) => (
                                        <IoIosArrowUp
                                            style={{
                                                fontSize: "20px",
                                                transition: "transform 0.3s",
                                                transform: isActive ? "rotate(0deg)" : "rotate(180deg)",
                                            }}

                                        />
                                    )}
                                >
                                    {data.map((faq, index) => (
                                        <Panel
                                            header={<span style={{ fontSize: "16px" }}>{faq.questions}</span>}
                                            key={index}
                                        >
                                            <div
                                                style={{ margin: 0 }}
                                                dangerouslySetInnerHTML={{
                                                    __html: (faq.answer),
                                                }}
                                            />
                                        </Panel>
                                    ))}
                                </Collapse>
                            </Col>
                        </div>
                    </Row>
                </section>

                <section className="bg-pastel-blue pb-5">
                    <h2 className="title-lg title-font-bg  fw-regular">
                        Preparing for the Selective School Exam
                    </h2>
                    <div className="container   pt-5 ">
                        <div className='row align'>
                            <div className="col-sm-7">

                                <p className="p-xl color-deep-blue mb-3">
                                    Try our Selective practice test pack designed to support your child&apos;s
                                    preparation for the Selective High School Placement Test. Our bank of
                                    practice questions with detailed explanations are based on the recent
                                    format.
                                </p>
                                <Link href='/' className='text-left mt-3'>
                                    <p
                                        style={{ cursor: 'pointer' }}
                                        className="link-btn bg-secondary  "

                                    >
                                        See Available Packs
                                    </p></Link>
                            </div>
                            <div className="col-sm-5">
                                <img
                                    src="/images/smart/img-1.png"
                                    alt="macbook-pro"
                                    className="border-r-10 w-100"
                                />
                            </div>
                        </div>

                    </div>
                </section>

                <section className="    pb-5">
                    <h2 className="title-lg title-font-bg  fw-regular">
                        Get Access to Free Selective School Tests
                    </h2>
                    <div className="container pt-5">

                        <div className="row align">
                            <div className="col-sm-5">
                                <img
                                    src="/images/smart/img-2.png"
                                    alt="macbook-pro"
                                    className="border-r-10 w-100"
                                />
                            </div>
                            <div className="col-sm-7">
                                <p className="p-xl color-deep-blue mb-2 ">
                                    Try our Selective practice test pack designed to support your child&apos;s
                                    preparation for the Selective High School Placement Test. Our bank of
                                    practice questions with detailed explanations are based on the recent
                                    format.
                                </p>
                                <ul className="check-list  round-check selective-school-list p-xl">
                                    <li className="color-deep-blue">
                                        <i className="fa-solid fa-circle-check color-teal-green" /> Latest
                                        exam-style questions
                                    </li>
                                    <li className="color-deep-blue">
                                        <i className="fa-solid fa-circle-check color-teal-green" /> Detailed solutions & comprehensive reports provided

                                    </li>
                                    <li className="color-deep-blue">
                                        <i className="fa-solid fa-circle-check color-teal-green" />
                                        365 days validity

                                    </li>
                                </ul>

                                <Link href="/" className="link-btn bg-secondary">
                                    See Available Packs
                                </Link>


                            </div>

                        </div>

                    </div>
                </section>
                <img
                    src="/images/smart/top-border-test.png"
                    alt="top-borde"
                    className="w-100 top-border-test"
                />
                <section className="testimonial-slider-part">
                    {/* <div className="container"> */}
                    <TestimonialSlider />
                    {/* </div> */}
                </section>

            </>

        </>
    )
}
