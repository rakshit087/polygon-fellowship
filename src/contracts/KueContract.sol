//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.6;

contract KueContract {
    uint256 public totalPosts;

    struct post {
        uint256 id;
        string image_cid;
        string caption;
        address author;
    }

    struct user {
        string profile_picture_cid;
        uint256[] posts;
    }

    mapping(address => user) public users;
    mapping(uint256 => post) public posts;

    function updateProfilePicture(string memory _cid) public {
        users[msg.sender].profile_picture_cid = _cid;
    }

    function createPost(string memory _image_cid, string memory _caption)
        external
    {
        totalPosts++;
        post memory _post = post(totalPosts, _image_cid, _caption, msg.sender);
        posts[totalPosts] = _post;
        users[msg.sender].posts.push(totalPosts);
    }

    function getPost(uint256 _post_id) external view returns (post memory) {
        return posts[_post_id];
    }

    function getUser(address _user_address)
        external
        view
        returns (user memory)
    {
        return users[_user_address];
    }

    function getLatestPosts(uint256 _page)
        external
        view
        returns (post[] memory)
    {
        uint256 _localLatest = (_page - 1) * 10;
        require(totalPosts > _localLatest);
        _localLatest = totalPosts - _localLatest;
        uint256 _counter = 0;
        if (_localLatest > 10) {
            post[] memory _latestposts = new post[](10);
            for (uint256 i = _localLatest; i > (_localLatest - 10); i--) {
                _latestposts[_counter] = posts[i];
                _counter++;
            }
            return _latestposts;
        } else {
            post[] memory _latestposts = new post[](_localLatest);
            for (uint256 i = _localLatest; i > 0; i--) {
                _latestposts[_counter] = posts[i];
                _counter++;
            }
            return _latestposts;
        }
    }
}
