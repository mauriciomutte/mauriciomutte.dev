---
date: '2023-03-23'
title: Using Terraform to create an AWS S3 bucket with CDN
description: 'AWS S3 + CloudFront CDN + Terraform'
tags: ['terraform', 'aws', 'infra']
---

The use of AWS S3 service is very common in several projects that I usually create. Sometimes I use it to host a static website (less common now with Vercel) or I just want a more efficient way to serve assets for my application.

The process of opening the AWS console, making all the necessary configurations (creating the bucket, adding CDN, domain, etc.) is not very pleasant. That's why I liked it so much when I discovered Terraform. With it, we can automate the creation of infrastructure resources.

## Prerequisites

You need to ensure a few basic steps before starting:

- Terraform installed
- AWS CLI installed
- AWS credentials configured

## Creating a Terraform recipe

In a new folder, we can create a `main.tf` file and start writing our Terraform recipe:

```bash
mkdir s3-terraform && cd s3-terraform
touch main.tf
```

### Variables

In Terraform, we need to define the `provider`, which is an abstraction of the API we want to use (in our case: AWS).

We will also define `locals`, which are local variables. They are important to make our recipe simpler and more editable. When it is replicated for create another bucket, it will be enough to change the variables.

```yaml
provider "aws" {
region = "us-east-1"
}

locals {
tags = {
Name = "Example SPA Bucket",
Environemnt = "production"
}
s3 = {
name = "mutteground-spa-bucket"
}
cdn = {
comment = "My SPA CloudFront CDN"
aliases = ["teste.mauriciomutte.dev"]
}
}
```

### S3 Bucket

Creation of the S3 bucket with the name that was previously defined in the variable:

```jsx
resource "aws_s3_bucket" "mutte_bucket" {
  bucket        = local.s3.name
  force_destroy = false

  tags = local.tags
}

resource "aws_s3_bucket_acl" "mutte_bucket_acl" {
  bucket = aws_s3_bucket.mutte_bucket.id
  acl    = "private"
}
```

### CloudFront (CDN)

A CDN (Content Delivery Network) is a network of servers that work together to deliver website content more efficiently. When you request content from a website, the CDN delivers it from the server that is closest to you. This makes the website faster and more reliable.

CDNs also use caching to store frequently accessed content on the servers, which reduces the load on the website's main server and ensures that content can be delivered quickly even during busy periods.

In this case, the CloudFront service from AWS is being used as a CDN to help deliver static files. The [OAC](https://aws.amazon.com/pt/blogs/networking-and-content-delivery/amazon-cloudfront-introduces-origin-access-control-oac/) is used to securely connect the S3 bucket with the CloudFront service.

```jsx
resource "aws_cloudfront_origin_access_control" "mutte_cdn_oac" {
  name = "mutte-cdn-oac"
  description = "OAC for ${aws_s3_bucket.mutte_bucket.bucket}"
  origin_access_control_origin_type = "s3"
  signing_behavior = "always"
  signing_protocol = "sigv4"
}

resource "aws_cloudfront_distribution" "mutte_cdn" {
  origin {
    origin_id   = aws_s3_bucket.mutte_bucket.bucket
    origin_access_control_id = aws_cloudfront_origin_access_control.mutte_cdn_oac.id
    domain_name = aws_s3_bucket.mutte_bucket.bucket_regional_domain_name
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.mutte_bucket.bucket
    compress               = true
    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  comment             = local.cdn.comment
  default_root_object = "index.html"
  http_version        = "http2"
  price_class         = "PriceClass_All"
  enabled             = true
  is_ipv6_enabled     = true
  retain_on_delete    = false
  wait_for_deployment = true

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}
```

## Setting Up Bucket Policies

To enable CloudFront to access the S3 bucket, we need to create a policy that grants it the necessary permissions

```jsx
data "aws_iam_policy_document" "allow_cdn_read_s3" {
	statement {
		actions = ["s3:GetObject"]
		resources = ["${aws_s3_bucket.mutte_bucket.arn}/*"]
		principals {
			type        = "Service"
			identifiers = ["cloudfront.amazonaws.com"]
		}
		condition {
			test     = "StringEquals"
			variable = "AWS:SourceArn"
			values   = [aws_cloudfront_distribution.mutte_cdn.arn]
		}
	}
}

data "aws_iam_policy_document" "combined" {
  source_policy_documents = [
    data.aws_iam_policy_document.allow_cdn_read_s3.json,
  ]
}

resource "aws_s3_bucket_policy" "mutte_bucket_policy_allow_cdn_read_s3" {
  bucket = aws_s3_bucket.mutte_bucket.id
  policy = data.aws_iam_policy_document.combined.json
}
```

## Using Terraform

With everything configured, we can apply our Terraform recipe. Before doing so, make sure that your AWS account credentials are correctly configured

Now, we need to run the following commands:

```bash
terraform init
```

To install and configure what is necessary to run Terraform. It's like running an npm install command for Node.

```bash
terraform plan
```

This command will show what changes will be made to our infrastructure.

```bash
terraform apply
```

Finally, we apply the configuration to our infrastructure.

## Conclusion

Automating the creation of infrastructure resources using Terraform can help save time and effort while making it easier to manage and maintain your infrastructure. By defining your infrastructure as code, you can ensure that it's consistent and reproducible, and avoid manual errors or inconsistencies.

Although the initial setup may require some effort, the benefits of using Terraform will quickly outweigh the costs in the long run. To make it even easier, I've created a [GIST](https://gist.github.com/mauriciomutte/7af465b39b520d03694b26d580daad6e) with the complete file, allowing you to simply copy the recipe whenever needed.
