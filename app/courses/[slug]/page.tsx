'use client';

import Link from 'next/link';
import {useContext } from 'react';
import CourseContext from '../contexts';

export default function Page() {
    const courseData: any = useContext(CourseContext);
    
    return(<div>
    {/* <Box courseData = {courseData}/> */}
    </div>);
}

/*
function Box({ courseData } : {
    courseData : any
}){
  return (
    <div>
      <div className="p-10">
        <div className=" rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className=" text-blue-600 text-center text-3xl uppercase font-bold mb-2">
              {courseData.title}
            </h2>
            <h2 className=" text-xl text-center text-gray-600 mb-2">
              id: {courseData._id}
            </h2>
            <h2 className="text-xl text-center text-gray-600 mb-2">
              {courseData.description}
            </h2>
            <p className="text-gray-500  mb-2">
              Duration: {courseData.duration} hours
            </p>
            <p className="text-gray-500 mb-4">
              Instructor: {courseData.instructor}
            </p>
            <h3 className="text-lg text-blue-600 font-semibold mb-2">
              Modules
            </h3>
            <ul>
              {courseData.modules &&
                courseData.modules.map((module: any, moduleIndex: any) => (
                  <li
                    key={moduleIndex}
                    className="mb-2 bg-blue-500 p-10 rounded-md"
                  >
                    <p className="text-gray-100 font-bold text-2xl">
                      {module.title}
                    </p>
                    <ul>
                      {module.videos &&
                        module.videos.map((video, videoIndex) => (
                          <li key={videoIndex} className="ml-4">
                            <p className="text-gray-100">
                              {video.title}: {video.url}
                            </p>
                          </li>
                        ))}
                    </ul>
                    <ul>
                      <h3 className="text-lg text-blue-50 mt-6 font-semibold mb-2">
                        Assignments
                      </h3>
                      {module.assignments &&
                        module.assignments.map(
                          (assignment, assignmentIndex) => (
                            <li key={assignmentIndex} className="ml-4">
                              <div className="bg-gray-100 p-4 rounded-md shadow-md">
                                <h4 className="text-lg text-gray-800 font-semibold mb-2">
                                  {assignment.title}
                                </h4>
                                <ul>
                                  {assignment.questions &&
                                    assignment.questions.map(
                                      (question, questionIndex) => (
                                        <li
                                          key={questionIndex}
                                          className="ml-4"
                                        >
                                          <div className="bg-white p-4 rounded-md shadow-md mb-4">
                                            <p className="text-gray-800 mb-2">
                                              {question.questionText}
                                            </p>
                                            <p className="text-gray-800 mb-2">
                                              Type: {question.questionType}
                                            </p>
                                            <ul>
                                              {question.options &&
                                                question.options.map(
                                                  (option, optionIndex) => (
                                                    <li
                                                      key={optionIndex}
                                                      className="ml-4"
                                                    >
                                                      <p className="text-gray-600">
                                                        {option}
                                                      </p>
                                                    </li>
                                                  )
                                                )}
                                            </ul>
                                            <p className="text-gray-800 mt-2">
                                              Correct Answer:{" "}
                                              {question.correctAnswer}
                                            </p>
                                          </div>
                                        </li>
                                      )
                                    )}
                                </ul>
                              </div>
                            </li>
                          )
                        )}
                    </ul>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-4 w-full flex items-center justify-center">
        <Link
          href={"/courses/add/module?id=" + courseData._id}
          className="p-4 bg-red-400"
        >
          Add Module
        </Link>
      </div>
    </div>
  );
};
*/