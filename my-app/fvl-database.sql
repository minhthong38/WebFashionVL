-- 1. Tạo cơ sở dữ liệu
CREATE DATABASE FashionStore;
GO

-- 2. Sử dụng cơ sở dữ liệu vừa tạo
USE FashionStore;
GO

-- 3. Tạo bảng `Users` (Người dùng)
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    FullName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    Password NVARCHAR(255) NOT NULL,
    Phone NVARCHAR(15),
    Address NVARCHAR(255)
);
GO

-- 4. Tạo bảng `Categories` (Danh mục)
CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY IDENTITY(1,1),
    CategoryName NVARCHAR(100) NOT NULL,
    Description NVARCHAR(255)
);
GO

-- 5. Tạo bảng `ProductTypes` (Loại sản phẩm)
CREATE TABLE ProductTypes (
    ProductTypeID INT PRIMARY KEY IDENTITY(1,1),
    ProductTypeName NVARCHAR(100) NOT NULL,
    Description NVARCHAR(255)
);
GO

-- 6. Tạo bảng `Products` (Sản phẩm)
CREATE TABLE Products (
    ProductID INT PRIMARY KEY IDENTITY(1,1),
    ProductName NVARCHAR(100) NOT NULL,
    Description NVARCHAR(255),
    Price DECIMAL(18, 2) NOT NULL,
    Stock INT NOT NULL,
    CategoryID INT,
    ProductTypeID INT,
    Color NVARCHAR(50),
    Size NVARCHAR(10),
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID),
    FOREIGN KEY (ProductTypeID) REFERENCES ProductTypes(ProductTypeID)
);
GO

-- 7. Tạo bảng `Orders` (Đơn hàng)
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT,
    OrderDate DATETIME DEFAULT GETDATE(),
    Status NVARCHAR(50) NOT NULL,
    TotalAmount DECIMAL(18, 2) NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE(),
    UpdatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
GO

-- 8. Tạo bảng `OrderDetails` (Chi tiết đơn hàng)
CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY IDENTITY(1,1),
    OrderID INT,
    ProductID INT,
    Quantity INT NOT NULL,
    Price DECIMAL(18, 2) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
GO

-- 9. Tạo bảng `Shipping` (Vận chuyển)
CREATE TABLE Shipping (
    ShippingID INT PRIMARY KEY IDENTITY(1,1),
    OrderID INT,
    ShippingAddress NVARCHAR(255) NOT NULL,
    ShippingDate DATETIME,
    DeliveryDate DATETIME,
    Status NVARCHAR(50) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID)
);
GO

-- 10. Thêm một số dữ liệu mẫu cho bảng ProductTypes
INSERT INTO ProductTypes (ProductTypeName, Description) VALUES 
(N'Thời trang nữ', N'Các sản phẩm thời trang dành cho nữ'),
(N'Thời trang nam', N'Các sản phẩm thời trang dành cho nam'),
(N'Thời trang trẻ em', N'Các sản phẩm thời trang dành cho trẻ em');

-- 11. Thêm danh mục mẫu
INSERT INTO Categories (CategoryName, Description) VALUES 
(N'Áo', N'Các loại áo thời trang'),
(N'Quần', N'Các loại quần thời trang'),
(N'Giày', N'Các loại giày thời trang');

-- 12. Thêm người dùng mẫu
INSERT INTO Users (FullName, Email, Password, Phone, Address) VALUES 
(N'Nguyễn Văn A', 'vana@example.com', '111111', '0123456789', N'123 Đường ABC'),
(N'Trần Thị B', 'btr@example.com', '123456', '0987654321', N'456 Đường XYZ');

-- 13. Thêm sản phẩm mẫu
INSERT INTO Products (ProductName, Description, Price, Stock, CategoryID, ProductTypeID, Color, Size) VALUES 
(N'Áo phông trắng', N'Áo phông cotton trắng', 150000, 100, 1, 1, N'Trắng', N'M'),
(N'Quần jean xanh', N'Quần jean màu xanh', 300000, 50, 2, 2, N'Xanh', N'L');

-- 14. Thêm đơn hàng mẫu
INSERT INTO Orders (UserID, Status, TotalAmount) VALUES 
(1, N'Đang xử lý', 450000);

-- 15. Thêm chi tiết đơn hàng mẫu
INSERT INTO OrderDetails (OrderID, ProductID, Quantity, Price) VALUES 
(1, 1, 1, 150000), 
(1, 2, 1, 300000);

-- 16. Thêm dữ liệu vào bảng Shipping
INSERT INTO Shipping (OrderID, ShippingAddress, ShippingDate, DeliveryDate, Status) VALUES 
(1, N'123 Đường ABC', GETDATE(), DATEADD(DAY, 3, GETDATE()), N'Đang giao hàng');
GO

-- 17. Hiện dữ liệu từ bảng Users
SELECT * FROM Users;
GO

-- 18. Hiện dữ liệu từ bảng Categories
SELECT * FROM Categories;
GO

-- 19. Hiện dữ liệu từ bảng ProductTypes
SELECT * FROM ProductTypes;
GO

-- 20. Hiện dữ liệu từ bảng Products
SELECT * FROM Products;
GO

-- 21. Hiện dữ liệu từ bảng Orders
SELECT * FROM Orders;
GO

-- 22. Hiện dữ liệu từ bảng OrderDetails
SELECT * FROM OrderDetails;
GO

-- 23. Hiện dữ liệu từ bảng Shipping
SELECT * FROM Shipping;
GO

-- 24. Hiện thông tin đơn hàng kèm tên người dùng
SELECT o.OrderID, u.FullName, o.OrderDate, o.Status, o.TotalAmount 
FROM Orders o
JOIN Users u ON o.UserID = u.UserID;
GO

-- 25. Hiện thông tin vận chuyển kèm thông tin đơn hàng
SELECT s.ShippingID, o.OrderID, s.ShippingAddress, s.ShippingDate, s.DeliveryDate, s.Status
FROM Shipping s
JOIN Orders o ON s.OrderID = o.OrderID;
GO
