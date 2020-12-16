git reset --soft commit_Id nó sẽ quay lại commit có id mà ta chỉ định và nó sẽ mở, hủy đi tất cả các commit mà bạn đã commit sau cái commit mà bạn đã chỉ định và các file sẽ trở về staging Area (đã được add nhưng chưa commit lên lan9). VD: Ta đã commit với nhãn là lan9 giờ ta sẽ trở về lúc commit mà nhãn là lan8 bằng cách dùng lệnh trên và đánh id của commit lan8 vào nó sẽ trở về commit lan8 và hủy commit lan9.


git reset --mixed commit_Id cũng tương tự như reset --soft trên nhưng chỉ khác là các file được add trong lan8 de lên lan9 không còn ở trong staging Area nữa mà trở về working drectory luôn (nghĩa là các file sẽ trở về luôn trạng thái ở lần 8 vì nó không tồn tại trong working drectory luôn nên chắc chắn mọi thay đổi sẽ quay về). 

git reset --hard commit_Id tương tự nhưng trạng thái của commit sẽ biến mất sạch sẽ và không còn file nào trong staging area hoặc working directory luôn. 