from distutils.command.upload import upload
from django.db import models


class Banner(models.Model):
    img=models.CharField(max_length=250)
    alt_text=models.CharField(max_length=300)
    
    def __str__(self) -> str:
        return self.title


class Category(models.Model):
    title=models.CharField(max_length=180)
    image=models.ImageField(upload_to="imgs/", blank=True)
    
    def __str__(self) -> str:
        return self.title


class Marca(models.Model):
    title=models.CharField(max_length=100)
    image=models.ImageField(upload_to="imgs")
    
    def __str__(self) -> str:
        return self.title


class Color(models.Model):
    title=models.CharField(max_length=100)
    color_code=models.CharField(max_length=100)
    
    def __str__(self) -> str:
        return self.title


class Size(models.Model):
    title=models.CharField(max_length=100)
    
    def __str__(self) -> str:
        return self.title


class Product(models.Model):
    title=models.CharField(max_length=200)
    image=models.ImageField(upload_to="imgs/")
    slug=models.CharField(max_length=100)
    detail=models.TextField()
    specs=models.TextField()
    marca=models.ForeignKey(Marca, on_delete=models.CASCADE)
    category=models.ForeignKey(Category, on_delete=models.CASCADE)
    color=models.ForeignKey(Color, on_delete=models.CASCADE)
    size=models.ForeignKey(Size, on_delete=models.CASCADE)
    status=models.BooleanField(default=True)
    
    def __str__(self) -> str:
        return self.title


class ProductAttribute(models.Model):
    product=models.ForeignKey(Product, on_delete=models.CASCADE)
    color=models.ForeignKey(Color, on_delete=models.CASCADE)
    size=models.ForeignKey(Size, on_delete=models.CASCADE)
    price=models.PositiveBigIntegerField()
    
    def __str__(self) -> str:
        return self.product.title
