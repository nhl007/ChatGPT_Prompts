type params = {
  params: {
    id: string;
  };
};

type PostData = {
  _id: string | number;
  creator: {
    _id: string | number;
    username: string;
    email: string;
    image: string;
  };
  prompt: string;
  tag: string;
};

type PromptCardProps = {
  post: PostData;
  handleEdit?: (post: PostData) => void;
  handleDelete?: (post: PostData) => void;
  handleTagClick?: (tagName: string) => void;
};

type PromptCardList = {
  data: PostData[];
  handleTagClick: (tagName: string) => void;
};

type ProfileProps = {
  name: string;
  desc: string;
  data: PostData[];

  handleEdit?: (post: PostData) => void;
  handleDelete?: (post: PostData) => void;
};

type FormProps = {
  type: string;
  post: {
    prompt: string;
    tag: string;
  };
  setPost: Dispatch<
    SetStateAction<{
      prompt: string;
      tag: string;
    }>
  >;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
};
