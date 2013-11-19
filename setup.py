from setuptools import setup, find_packages
import sys, os

setup(name='django-responsive-dfp',
      version="0.1.2.3",
      description="Responsive ads using mediaquery for dfp.",
      long_description=open(os.path.join(os.path.dirname(__file__), 'README.rst')).read(),
      classifiers=[
        'Development Status :: 4 - Beta',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Framework :: Django',
        ], # Get strings from http://pypi.python.org/pypi?%3Aaction=list_classifiers
      keywords='django dfp ads responsive',
      author='David Charbonnier',
      author_email='d.charbonnier@oxys.net',
      url='http://github.com/dcharbonnier/django-responsive-dfp',
      license='License :: OSI Approved :: MIT License',
      packages=find_packages(),
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'django >= 1.3',
      ],
      )
