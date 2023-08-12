import React from "react";

const CommentsData = [
  {
    name: "shweta saindane",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    replies: [
      {
        name: "shweta saindane",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [
          {
            name: "shweta saindane",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            replies: [
              {
                name: "shweta saindane",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies: [
                  {
                    name: "shweta saindane",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "shweta saindane",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    replies: [
      {
        name: "shweta saindane",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [
          {
            name: "shweta saindane",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            replies: [
              {
                name: "shweta saindane",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies: [
                  {
                    name: "shweta saindane",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "shweta saindane",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text} = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="h-12 w-12"
        alt="user"
        src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5 pt-1">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
