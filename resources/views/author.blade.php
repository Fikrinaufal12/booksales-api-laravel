<h2>Daftar Author</h2>
<ul>
    @foreach($authors as $author)
        <li>{{ $author['name'] }}</li>
    @endforeach
</ul>
