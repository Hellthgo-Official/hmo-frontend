import React from 'react';

type Props = {};

const BuildingIcon = (props: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.4737 18.9474H17.8947V4.73684C17.9025 4.62172 17.8715 4.50731 17.8067 4.4119C17.7418 4.31649 17.6468 4.24558 17.5368 4.21053L13.6842 2.6V18.9474H12.6316V0.526316C12.6316 0.386728 12.5761 0.252858 12.4774 0.154154C12.3787 0.0554511 12.2449 0 12.1053 0H2.63158C2.49199 0 2.35812 0.0554511 2.25942 0.154154C2.16071 0.252858 2.10526 0.386728 2.10526 0.526316V18.9474H0.526316C0.386728 18.9474 0.252858 19.0028 0.154154 19.1015C0.0554511 19.2002 0 19.3341 0 19.4737C0 19.6133 0.0554511 19.7471 0.154154 19.8458C0.252858 19.9445 0.386728 20 0.526316 20H19.4737C19.6133 20 19.7471 19.9445 19.8458 19.8458C19.9445 19.7471 20 19.6133 20 19.4737C20 19.3341 19.9445 19.2002 19.8458 19.1015C19.7471 19.0028 19.6133 18.9474 19.4737 18.9474ZM15.2632 6.31579H16.3158C16.4554 6.31579 16.5892 6.37124 16.688 6.46994C16.7867 6.56865 16.8421 6.70252 16.8421 6.84211C16.8394 6.98085 16.7831 7.11316 16.685 7.21129C16.5868 7.30941 16.4545 7.36573 16.3158 7.36842H15.2632C15.1244 7.36573 14.9921 7.30941 14.894 7.21129C14.7959 7.11316 14.7395 6.98085 14.7368 6.84211C14.7368 6.70252 14.7923 6.56865 14.891 6.46994C14.9897 6.37124 15.1236 6.31579 15.2632 6.31579ZM15.2632 9.47368H16.3158C16.4554 9.47368 16.5892 9.52913 16.688 9.62784C16.7867 9.72654 16.8421 9.86041 16.8421 10C16.8421 10.1396 16.7867 10.2735 16.688 10.3722C16.5892 10.4709 16.4554 10.5263 16.3158 10.5263H15.2632C15.1236 10.5263 14.9897 10.4709 14.891 10.3722C14.7923 10.2735 14.7368 10.1396 14.7368 10C14.7368 9.86041 14.7923 9.72654 14.891 9.62784C14.9897 9.52913 15.1236 9.47368 15.2632 9.47368ZM15.2632 12.6316H16.3158C16.4545 12.6343 16.5868 12.6906 16.685 12.7887C16.7831 12.8868 16.8394 13.0192 16.8421 13.1579C16.8421 13.2975 16.7867 13.4314 16.688 13.5301C16.5892 13.6288 16.4554 13.6842 16.3158 13.6842H15.2632C15.1236 13.6842 14.9897 13.6288 14.891 13.5301C14.7923 13.4314 14.7368 13.2975 14.7368 13.1579C14.7395 13.0192 14.7959 12.8868 14.894 12.7887C14.9921 12.6906 15.1244 12.6343 15.2632 12.6316ZM15.2632 15.7895H16.3158C16.4554 15.7895 16.5892 15.8449 16.688 15.9436C16.7867 16.0423 16.8421 16.1762 16.8421 16.3158C16.8421 16.4554 16.7867 16.5892 16.688 16.688C16.5892 16.7867 16.4554 16.8421 16.3158 16.8421H15.2632C15.1236 16.8421 14.9897 16.7867 14.891 16.688C14.7923 16.5892 14.7368 16.4554 14.7368 16.3158C14.7368 16.1762 14.7923 16.0423 14.891 15.9436C14.9897 15.8449 15.1236 15.7895 15.2632 15.7895ZM8.42105 3.15789H9.47368C9.61327 3.15789 9.74714 3.21335 9.84585 3.31205C9.94455 3.41075 10 3.54462 10 3.68421C10 3.8238 9.94455 3.95767 9.84585 4.05637C9.74714 4.15508 9.61327 4.21053 9.47368 4.21053H8.42105C8.28147 4.21053 8.14759 4.15508 8.04889 4.05637C7.95019 3.95767 7.89474 3.8238 7.89474 3.68421C7.89474 3.54462 7.95019 3.41075 8.04889 3.31205C8.14759 3.21335 8.28147 3.15789 8.42105 3.15789ZM8.42105 6.31579H9.47368C9.61327 6.31579 9.74714 6.37124 9.84585 6.46994C9.94455 6.56865 10 6.70252 10 6.84211C10 6.98169 9.94455 7.11556 9.84585 7.21427C9.74714 7.31297 9.61327 7.36842 9.47368 7.36842H8.42105C8.28147 7.36842 8.14759 7.31297 8.04889 7.21427C7.95019 7.11556 7.89474 6.98169 7.89474 6.84211C7.89474 6.70252 7.95019 6.56865 8.04889 6.46994C8.14759 6.37124 8.28147 6.31579 8.42105 6.31579ZM8.42105 9.47368H9.47368C9.61327 9.47368 9.74714 9.52913 9.84585 9.62784C9.94455 9.72654 10 9.86041 10 10C10 10.1396 9.94455 10.2735 9.84585 10.3722C9.74714 10.4709 9.61327 10.5263 9.47368 10.5263H8.42105C8.28147 10.5263 8.14759 10.4709 8.04889 10.3722C7.95019 10.2735 7.89474 10.1396 7.89474 10C7.89474 9.86041 7.95019 9.72654 8.04889 9.62784C8.14759 9.52913 8.28147 9.47368 8.42105 9.47368ZM8.42105 12.6316H9.47368C9.61327 12.6316 9.74714 12.687 9.84585 12.7857C9.94455 12.8844 10 13.0183 10 13.1579C10 13.2975 9.94455 13.4314 9.84585 13.5301C9.74714 13.6288 9.61327 13.6842 9.47368 13.6842H8.42105C8.28147 13.6842 8.14759 13.6288 8.04889 13.5301C7.95019 13.4314 7.89474 13.2975 7.89474 13.1579C7.89474 13.0183 7.95019 12.8844 8.04889 12.7857C8.14759 12.687 8.28147 12.6316 8.42105 12.6316ZM5.2 3.15789H6.31579C6.45538 3.15789 6.58925 3.21335 6.68795 3.31205C6.78665 3.41075 6.84211 3.54462 6.84211 3.68421C6.84211 3.8238 6.78665 3.95767 6.68795 4.05637C6.58925 4.15508 6.45538 4.21053 6.31579 4.21053H5.26316C5.12357 4.21053 4.9897 4.15508 4.891 4.05637C4.79229 3.95767 4.73684 3.8238 4.73684 3.68421C4.73684 3.54462 4.79229 3.41075 4.891 3.31205C4.9897 3.21335 5.12357 3.15789 5.26316 3.15789H5.2ZM5.2 6.31579H6.31579C6.45538 6.31579 6.58925 6.37124 6.68795 6.46994C6.78665 6.56865 6.84211 6.70252 6.84211 6.84211C6.84211 6.98169 6.78665 7.11556 6.68795 7.21427C6.58925 7.31297 6.45538 7.36842 6.31579 7.36842H5.26316C5.12357 7.36842 4.9897 7.31297 4.891 7.21427C4.79229 7.11556 4.73684 6.98169 4.73684 6.84211C4.73684 6.70252 4.79229 6.56865 4.891 6.46994C4.9897 6.37124 5.12357 6.31579 5.26316 6.31579H5.2ZM5.2 9.47368H6.31579C6.45538 9.47368 6.58925 9.52913 6.68795 9.62784C6.78665 9.72654 6.84211 9.86041 6.84211 10C6.84211 10.1396 6.78665 10.2735 6.68795 10.3722C6.58925 10.4709 6.45538 10.5263 6.31579 10.5263H5.26316C5.12357 10.5263 4.9897 10.4709 4.891 10.3722C4.79229 10.2735 4.73684 10.1396 4.73684 10C4.73684 9.86041 4.79229 9.72654 4.891 9.62784C4.9897 9.52913 5.12357 9.47368 5.26316 9.47368H5.2ZM5.2 12.6316H6.31579C6.45538 12.6316 6.58925 12.687 6.68795 12.7857C6.78665 12.8844 6.84211 13.0183 6.84211 13.1579C6.84211 13.2975 6.78665 13.4314 6.68795 13.5301C6.58925 13.6288 6.45538 13.6842 6.31579 13.6842H5.26316C5.12357 13.6842 4.9897 13.6288 4.891 13.5301C4.79229 13.4314 4.73684 13.2975 4.73684 13.1579C4.73684 13.0183 4.79229 12.8844 4.891 12.7857C4.9897 12.687 5.12357 12.6316 5.26316 12.6316H5.2ZM7.89474 18.9474V16.8421H6.84211V18.9474H5.78947V16.2842C5.79753 16.1502 5.85652 16.0243 5.95436 15.9323C6.05221 15.8403 6.1815 15.7892 6.31579 15.7895H8.42105C8.56064 15.7895 8.69451 15.8449 8.79321 15.9436C8.89192 16.0423 8.94737 16.1762 8.94737 16.3158V18.9474H7.89474Z"
        fill="#07A53D"
      />
    </svg>
  );
};

export default BuildingIcon;