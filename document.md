    1. Các loại automated test
        - Unit test
        - Intergration test
        - E2E test

    2. Thư viện
        - jest: viết test, thực thi test, báo cáo test failed hay passed
        - react-testing-library: giúp tương tác với DOM ảo để có thể test UI của component

    3. TEST DRIVEN DEVELOPMENT (TDD)
        - Bước 1: viết test cho chức năng, tất cả test run failed (red)
        - Bươc 2: viết code cho chức năng, tất cả test run passed (green)
        - Bước 3: tối ưu code chức năng và vẫn đảm bảo test passed

    4. Watch mode
        - Là một option của jest để giúp theo dõi các file được thay đổi so với lần commit gần nhất. Từ đó chỉ thực thi test trên những file đã thay đổi này
        - Không chạy test trên những file đã được commit trước đó
        - Giúp tối ưu quá trình test bất kể bạn có bao nhiêu test được viết.

    5. Filter test
        - Sử dụng các phím tắt cơ bản trong terminal
        - Sử dụng các function
            test.only() --> chỉ thực hiện những test này khi chạy test file
            test.skip() --> bỏ qua test này khi chạy test file
