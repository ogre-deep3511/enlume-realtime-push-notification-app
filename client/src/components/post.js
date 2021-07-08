import { Input, Button } from 'antd';

const { TextArea } = Input;

const Post = () => {
    return (
        <div>
            <TextArea rows={4} />
            <Button type="primary" htmlType="submit" className="login-form-button">
            Post
            </Button>
        </div>
    );
}

export default Post