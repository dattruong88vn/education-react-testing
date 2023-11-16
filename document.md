A. Giới thiệu

1.  Các loại automated test - Unit test - Intergration test - E2E test

2.  Thư viện

    - jest: viết test, thực thi test, báo cáo test failed hay passed
    - react-testing-library: giúp tương tác với DOM ảo để có thể test UI của component

3.  TEST DRIVEN DEVELOPMENT (TDD)
    - Bước 1: viết test cho chức năng, tất cả test run failed (red)
    - Bươc 2: viết code cho chức năng, tất cả test run passed (green)
    - Bước 3: tối ưu code chức năng và vẫn đảm bảo test passed

B. JEST

1. Watch mode - Là một option của jest để giúp theo dõi các file được thay đổi so với lần commit gần nhất. Từ đó chỉ thực thi test trên những file đã thay đổi này - Không chạy test trên những file đã được commit trước đó - Giúp tối ưu quá trình test bất kể bạn có bao nhiêu test được viết.

2. Test

   - Sử dụng global function test(name, fn, timeout)
   - name: tên của test
   - fn: chứa thông tin mong đợi, nếu ko đúng trả về failed, đúng trả về passed
   - timeout: optional, thời gian để quit test, mặc định 5s

3. Filter test

   - Sử dụng các phím tắt cơ bản trong terminal
   - Sử dụng các function
     test.only() --> chỉ thực hiện những test này khi chạy test file
     test.skip() --> bỏ qua test này khi chạy test file

4. Group test

   - Sử dụng global function describe(name, fn);
   - name: tên group
   - fn: chứa các function test
   - Có thể sử dụng các fn filter như: describe.only() hay describe.skip()
   - Có thể nested các function describe

5. Quy ước đặt tên file test:

   - File có chứa phần mở rộng: ['.test.js', '.test.ts', '.test.jsx', '.test.tsx']
   - File có chứa phần mở rộng: ['.spec.js', '.spec.ts', '.spec.jsx', '.spec.tsx']
   - File có chứa phần mở rộng: ['.js', '.ts', '.jsx', '.tsx'] và nằm trong folder "**tests**"

6. Global function
   it() === test()
   fit() === test.only()
   xit() === test.skip()

7. Test Coverage
   - Dùng để thống kê danh sách test, file test, branch test, line test trong source code.
   - Sử dụng script: "test --coverage" để thực thi

C. React Testing Library

1. Test trong React là test cái gì?

   - Test component render
   - Test component render với props
   - Test component render với nhiều state thay đổi
   - Test component với các events

2. Không nên test cái gì?

   - Implementation details
   - Third-party code
   - Code không thực sự quan trọng khi đứng ở góc nhìn của người dùng (Ví dụ một util function để format lại định dạng ngày tháng trước khi hiển thị ra UI)

3. RTL Queries Single Element

   - Mỗi test đều tuân theo các bước cơ bản như sau:
     - Render component (dùng fn render của RTL)
     - Tìm một element được render trong component
     - Khẳng định lại element được tìm thấy passed hay failed test (sử dụng funciton expect kết hợp với một matcher function (từ jest hoặc jest-dom))
   - Queries là những methods được cung cấp bởi RT để tìm các element trong page
   - Khi query tìm 1 element mà kết quả ko tìm thấy hoặc tìm thấy nhiều element thì sẽ báo failed

   * getByRole: tìm element theo role (ƯU TIÊN dùng)

     - Khi nhiều element có cùng role, thì có thêm các thuộc tính name, level (chỉ dụng cho heading) cho object config trong method getByRole
     - Giá trị của thuộc tính name có thể là:
       - Label của một form element (thường thẻ input có 1 thẻ label đi cùng + thuộc tính htmlFor)
       - Text content của element
       - Giá trị của thuộc tính aria-label của element đó
     - Giá trị của thuộc tính level là từ 1 đến 6

   * getByLabelText
   * getByPlaceholderText
   * getByText
   * getByDisplayText
   * getByAltText
   * getByTitle
   * getByTestId

   4. RTL Queries Multi Element

      - getAllByRole

   5. TextMatch

      - TextMatch là tham số đầu tiên của tất cả các method query

        - Ví dụ: <div>Hello World</div>
        - screen.getByText("Hello World") --> Hello World chính là TextMatch

      - TextMatch có thể là
        - String --> screen.getByText("Hello World");
        - RegEx --> screen.getByText(/hello world/i);
        - Function
          - Cấu trúc: (content?: string, element: Element | null) => boolean
          - Ví dụ: screen.getByText(content => content.startsWith('Hello'))
